import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Institutions Schema
const institutionSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  adminId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  students: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
  instructors: [{ type: Schema.Types.ObjectId, ref: 'Users' }]
});

export const Institution = model('Institution', institutionSchema);

// Courses Schema
const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  language: { type: String, required: true },
  price: { type: Number, required: true },
  subscriptionPlan: { type: Boolean, required: true },
  instructors: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
  students: [
    {
      userId: { type: Schema.Types.ObjectId, ref: 'Users' },
    }
  ],
  content: [
    {
      type: { type: String, enum: ['video', 'quiz', 'assignment'], required: true },
      title: { type: String, required: true },
      url: { type: String },
    }
  ],
  discussionForum: [
    {
      userId: { type: Schema.Types.ObjectId, ref: 'Users' },
      message: { type: String },
      timestamp: { type: Date },
      replies: [
        {
          userId: { type: Schema.Types.ObjectId, ref: 'Users' },
          message: { type: String },
          timestamp: { type: Date }
        }
      ]
    }
  ]
});

export const Course = model('Course', courseSchema);

// Payments Schema
const paymentSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  courseId: { type: Schema.Types.ObjectId, ref: 'Courses', required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Pending', 'Completed', 'Failed'], required: true }
});

export const Payment = model('Payment', paymentSchema);

// Subscriptions Schema
const subscriptionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  plan: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
  status: { type: String, enum: ['Active', 'Expired'], required: true }
});

export const Subscription = model('Subscription', subscriptionSchema);
