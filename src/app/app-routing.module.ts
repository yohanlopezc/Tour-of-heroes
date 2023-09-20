imports: [ RouterModule.forRoot(routes) ],
import { DashboardComponent } from './dashboard/dashboard.component';

exports: [ RouterModule ]
{ path: 'dashboard', component: DashboardComponent },