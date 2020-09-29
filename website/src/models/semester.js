const mongoose = require('mongoose');

const { Schema } = mongoose;

const SemesterSchema = new Schema({
  year: { type: Number, required: true },
  season: {
    type: String, enum: ['k', 's'], default: 'k', required: true,
  },
});

// Combination of year and season must be unique
SemesterSchema.index({ year: 1, season: 1 }, { unique: true });

// Virtual for short name
SemesterSchema.virtual('short').get(() => this.year + this.season);

// Virtual for full name
SemesterSchema.virtual('full').get(() => this.year + (this.season === 'k' ? ' kevad' : ' sügis'));

module.exports = mongoose.model('Semester', SemesterSchema);
