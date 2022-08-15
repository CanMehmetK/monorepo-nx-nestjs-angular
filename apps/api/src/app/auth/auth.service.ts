import {Injectable} from '@nestjs/common';
import {sign} from 'jsonwebtoken';

import {UserService} from "../user/user.service";
import {Payload} from "@libs/types";


@Injectable()
export class AuthService {

  constructor(private userService: UserService) {
  }

  async signPayload(payload: Payload) {
    return sign(payload,
      's234%&/^%+dfaasdfasfas435345oı3asf^+^+dfgdfe453454353+ESFASdfa',
      {expiresIn: '7d'});
  }

  async validateUser(payload: Payload) {
    return await this.userService.findByPayload(payload);
  }
}
