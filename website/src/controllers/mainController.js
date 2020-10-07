import async from 'async';
import axios from 'axios';
import Article from '../models/article';
import Event from '../models/event';

/* GET index page */
exports.indexGet = (req, res, next) => {
  async.parallel({
    articles: (callback) => {
      Article.find({})
        .sort({ date: -1 })
        .limit(3)
        .populate('author')
        .exec(callback);
    },
    events: (callback) => {
      Event.find({ date: { $gte: new Date() } })
        .sort({ date: 1 })
        .exec(callback);
    },
    cmsFields: (callback) => {
      const endpoint = process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:8080/cms/values' : '/cms/values';
      axios.get(endpoint, {
        params: {
          keys: JSON.stringify(['cta_text']),
        },
      }).then((fieldsResponse) => {
        callback(null, fieldsResponse.data);
      }).catch((error) => {
        callback('failed to fetch CMS values', null);
      });
    },
  }, (err, results) => {
    if (err) return next(err);

    res.render('index', {
      title: 'MAT-INF tudengiselts',
      user: req.session.user,
      articles: results.articles,
      events: results.events,
      cmsFields: results.cmsFields,
    });
  });
};

/* GET about page */
exports.aboutGet = (req, res, next) => {
  res.render('about', {
    title: 'Meist - MITS',
    user: req.session.user,
  });
};

/* GET events page */
exports.eventsGet = (req, res, next) => {
  async.parallel({
    new_events: (callback) => {
      Event.find({ date: { $gte: new Date() } })
        .sort({ date: 1 })
        .exec(callback);
    },
    old_events: (callback) => {
      Event.find({ date: { $lte: new Date() } })
        .limit(9)
        .sort({ date: -1 })
        .exec(callback);
    },
  }, (err, results) => {
    if (err) return next(err);

    res.render('events', {
      title: 'Üritused - MITS',
      user: req.session.user,
      new_events: results.new_events,
      old_events: results.old_events,
    });
  });
};

/* GET events query page */
exports.eventsQueryGet = (req, res, next) => {
  Event.find({})
    .skip(Number(req.params.skip))
    .limit(10)
    .sort({ date: -1 })
    .exec((err, events) => {
      if (err) return next(err);

      const out = {
        more: events.length > 9,
        events: events.slice(0, 9),
      };

      return res.json(out);
    });
};

/* GET event page */
exports.eventGet = (req, res, next) => {
  Event.findOne({ event_id: req.params.id })
    .exec((err, event) => {
      if (err) return next(err);
      if (!event) {
        res.status(404);
        return res.render('404.hbs', {
          title: 'Lehekülge ei leitud! - MITS',
        });
      }

      res.render('event', {
        title: `${event.title} - MITS`,
        user: req.session.user,
        event,
      });
    });
};

/* GET mentor page */
exports.mentorGet = (req, res, next) => {
  res.render('mentor', {
    title: 'Mentorprogramm - MITS',
    user: req.session.user,
  });
};
