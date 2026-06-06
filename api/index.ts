import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import helmet from 'helmet';
import compression from 'compression';
import mime from 'mime-types';

import authRoutes from '../src/routes/auth';
import timetableRoutes from '../src/routes/timetable';
import announcementRoutes from '../src/routes/announcements';
import displayRoutes from '../src/routes/display';
import teachersRoutes from '../src/routes/teachers';
import notificationRoutes from '../src/routes/notifications';
import teacherCheckinRoutes from '../src/routes/teacherCheckins';
import reportRoutes from '../src/routes/reports';
import bellRoutes from '../src/routes/bell';
import breakTimesRoutes from '../src/routes/breakTimes';
import dynamicEventsRoutes from '../src/routes/dynamicEvents';
import timeRoutes from '../src/routes/time';
import phoneNumbersRoutes from '../src/routes/phoneNumbers';
import studentRoutes from '../src/routes/students';
import gradeRoutes from '../src/routes/grades';
import alumniRoutes from '../src/routes/alumni';
import uploadRoutes from '../src/routes/uploads';
import parentRoutes from '../src/routes/parents';
import smartTimetableRoutes from '../src/routes/smartTimetable';
import hardwareRoutes from '../src/routes/hardware';

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(compression());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/api/auth', authRoutes);
app.use('/api/timetable', timetableRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/display', displayRoutes);
app.use('/api/teachers', teachersRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/teacher-checkins', teacherCheckinRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/bell', bellRoutes);
app.use('/api/break-times', breakTimesRoutes);
app.use('/api/dynamic-events', dynamicEventsRoutes);
app.use('/api/time', timeRoutes);
app.use('/api/phone-numbers', phoneNumbersRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/grades', gradeRoutes);
app.use('/api/alumni', alumniRoutes);
app.use('/api/uploads', uploadRoutes);
app.use('/api/parents', parentRoutes);
app.use('/api/smart-timetable', smartTimetableRoutes);
app.use('/api/hardware', hardwareRoutes);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default app;
