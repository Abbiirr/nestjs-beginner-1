import { Controller } from '@nestjs/common';

@Controller
export class AuthControlller{
    constructor(private authService: AuthService) {}
}