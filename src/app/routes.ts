import {SignInComponent} from './auth/signin/signin.component';
import {SignUpComponent} from './auth/signup/signup.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CoursesComponent} from './courses/courses.component';
import {UsersComponent} from './users/users.component';

export class AppRoutes
{

  static routes = [
    {path: 'auth/signin', component: SignInComponent},
    {path: 'auth/signup', component: SignUpComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'users', component: UsersComponent}
  ];
}
