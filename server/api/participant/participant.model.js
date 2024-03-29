'use strict';

import mongoose from 'mongoose';

var ParticipantSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  countryCode: String
});

export default mongoose.model('Participant', ParticipantSchema);
