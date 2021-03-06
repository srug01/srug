import {securityId} from '@loopback/security';
import {PermissionKeys} from './authorization/permission-keys';
import {Userrolemapping} from './models';

export interface RequiredPermissions {
  required: PermissionKeys[];
}

// export type FileUploadHandler = RequestHandler;
export interface MyUserProfile {
  [securityId]: string;
  userId: string;
  email?: string;
  name: string;
  typeSyscode: number;
  permissions: PermissionKeys[];
  roles: Userrolemapping[];
}
