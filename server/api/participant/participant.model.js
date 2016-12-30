'use strict';

import mongoose from 'mongoose';

var ParticipantSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Participant', ParticipantSchema);
