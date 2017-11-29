// ==================
// | Authentication |
// ==================

import KoaPassport from 'koa-passport';
import Models from '@/mongodb/Models';

// Simple local authentication
KoaPassport.use(Models.Account.createStrategy());
KoaPassport.serializeUser(Models.Account.serializeUser());
KoaPassport.deserializeUser(Models.Account.deserializeUser());

