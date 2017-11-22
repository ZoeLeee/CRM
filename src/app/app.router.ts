import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//路由守卫
import {CanEnterGuard } from '../service/checkLogin.service';

//主页组件
import {IndexComponent} from "./index/index.component";
//主页概览组件
import {OverviewComponent} from "./overView/overView.component";
//主页订单数据组件
import {OrderDataComponent} from "./orderData/orderData.component";
//主页销售数据模块
import {SaleDataComponent} from "./saleData/saleData.component";
//邮箱组件
import { EmailComponent } from './email/email.component';
// 收件箱组件
import { EmailInboxComponent } from './email/emaiInbox/inbox.component';
// 发件箱组件
import { EmailOutboxComponent } from './email/emailOutbox/outbox.component';
//写信组件
import {EmailComposeComponent} from "./email/compose/compose.component";
// 导入登录组件
import {LoginComponent} from "./login/login.component";
// 注册组件
import {RegisterComponent} from "./register/register.component";
//个人资料
import {ProfileComponent} from "./profile/profile.component";
// 404组件
import {NotFoundComponent} from "./404/notFound.component"
//聊天组件
import {ChatComponent} from "./chat/chat.component";
//日程组件
import {ScheduleComponent} from "./schedule/schedule.component";
//备忘录
import {MemoComponent} from "./memo/memo.component";
// 客户组件
import {ClientComponent} from "./clients/clients.component";
//图表组件
import {ChartsComponent} from "./charts/charts.component";
//业绩报表组件
import {PerformanceChartComponent} from "./charts/perfromanceChart/performanceChart.component";
//项目组件
import {ProjectComponent} from "./projects/project.component";
import {ProjectDetailComponent} from './projectsDetail/project-detail.component';
//联系人组件
import {ContactsComponent} from './contacts/contacts.component';
// 团队组件
import {TeamsBoardComponent} from './teamsBoard/team-board.component';
//blog组件
import {BlogComponent} from './blog/blog.component';
//文章组件
import {ArticleComponent} from './article/article.component';
//FAQ组件
import {FAQComponent} from './faq/faq.component';
//文件管理组件
import {FileManagerComponent} from './fileManager/file-manager.component';
//修改头像组件
import {ModifyAvatarComponent} from './modifyAvatar/modify-avatar.component';
//搜索组件
import {SearchResultComponent} from './searchResult/search-result.component';
const routes: Routes = [
  { 
    path: '', 
    component: IndexComponent ,
    canActivate:[CanEnterGuard],
    children:[
      { path: '', component: OverviewComponent },
      { path: 'orderData', component: OrderDataComponent },
      { path: 'saleData', component: SaleDataComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'memo', component: MemoComponent },
      { path: 'client', component: ClientComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'performance', component: PerformanceChartComponent },
      { path: 'projects', component: ProjectComponent },
      { path: 'projectsDetail', component: ProjectDetailComponent },   
      { path: 'contacts', component: ContactsComponent },   
      { path: 'teamBoard', component:TeamsBoardComponent },   
      { path: 'blog', component:BlogComponent },   
      { path: 'article', component:ArticleComponent },   
      { path: 'faq', component:FAQComponent },   
      { path: 'fileManager', component:FileManagerComponent },   
      { path: 'avatar', component:ModifyAvatarComponent },   
      { path: 'search', component:SearchResultComponent },   
      { 
        path: 'email', 
        component: EmailComponent ,
        children:[
          {path: '', component: EmailInboxComponent},
          {path: 'inbox', component: EmailInboxComponent},
          {path: 'outbox', component: EmailOutboxComponent},
          {path: 'compose', component: EmailComposeComponent},

        ]
      },
    ]
  },    
  { path: 'index', redirectTo:"" },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }