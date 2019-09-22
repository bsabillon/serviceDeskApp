import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import { LoginComponent } from './components/user/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';
import { NewWorkOrderComponent } from './components/workOrder/new-work-order/new-work-order.component';
import { MyWorkOrdersComponent } from './components/workOrder/my-work-orders/my-work-orders.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AllWorkOrdersComponent } from './components/workOrder/all-work-orders/all-work-orders.component';
import { WorkOrderDetailsComponent } from './components/workOrder/work-order-details/work-order-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'knowledgeBase', component: KnowledgeBaseComponent },
  { path: 'newWorkOrder', component: NewWorkOrderComponent },
  { path: 'myWorkOrders', component: MyWorkOrdersComponent },
  { path: 'allWorkOrders', component: AllWorkOrdersComponent },
  { path: 'incidentDetails/:id', component: WorkOrderDetailsComponent },
  { path: 'profile', component: ProfileComponent }
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
