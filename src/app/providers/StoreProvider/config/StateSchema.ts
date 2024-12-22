import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginScheme } from 'features/AuthByUsername/model/types/loginScheme';

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    loginForm: LoginScheme
}
