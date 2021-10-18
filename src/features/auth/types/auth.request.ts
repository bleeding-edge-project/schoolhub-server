import { Role } from '../../users';

export interface CreateAccessTokenBodyReq {
  role: Role;
  email: string;
  password: string;
}

export interface UpdateAccessTokenBodyReq {
  refreshToken: string;
}

export interface DeleteRefreshTokenBodyReq extends UpdateAccessTokenBodyReq {}
