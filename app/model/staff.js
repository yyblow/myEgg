module.exports = (app) => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const StaffSchema = new Schema({
    login_name: { type: String, required: true },
    login_pwd: { type: String, required: true },
    staff_name: { type: String, default: '' },
    staff_no: { type: String, default: '' },
    staff_phone: { type: String, default: '' },
    staff_status: { type: String, default: 1 },
    time_create: { type: String, default: '' },
    time_last: { type: String, default: '' },
    ip_last: { type: String, default: '' },
  })

  return mongoose.model('Staff',StaffSchema,'staff')
}