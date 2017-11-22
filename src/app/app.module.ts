import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 导入HTTP服务模块
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
//请求后台服务
import { MyHttpService } from '../service/myhttp.service';
//主页是否登录路由守卫
import {CanEnterGuard } from '../service/checkLogin.service';

// 导入路由模块
import {AppRoutingModule} from "./app.router";

// 引入富文本编辑器
import { UEditorModule } from 'ngx-ueditor';
//引入文件上传模块
import { FileUploadModule } from 'ng2-file-upload'; 
//导入服务
//切换显示状态服务
import {ToggleService} from "../service/toggle.service";
// 导入指令
// 图表指令
import {ChartDirective} from "../directive/chart.directive"

// primeNG模块
import {ScheduleModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// 导入组件
import { AppComponent } from './app.component';
//主页组件
import {IndexComponent} from "./index/index.component";
// 左边菜单栏
import {NavbarLeftComponent} from './navbarLeft/navbarLeft.component';
// 头部导航栏
import {NavHeaderComponent} from "./navHeader/navHeader.component";
//页尾组件
import {FooterComponent} from "./footer/footer.component";
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
// mini聊天窗口组件
import {MiniChatComponent} from "./miniChat/miniChat.component";
// 404组件
import {NotFoundComponent} from "./404/notFound.component";
//聊天组件
import {ChatComponent} from "./chat/chat.component";
//日程组件
import {ScheduleComponent} from "./schedule/schedule.component";
//备忘录
import {MemoComponent} from "./memo/memo.component";
// 客户组件
import {ClientComponent} from "./clients/clients.component";
//客户列表组件
import {ClientListComponent} from "./clients/clientsList/client-list.component";
//报表组件
import {ChartsComponent} from "./charts/charts.component";
//业绩报表组件
import {PerformanceChartComponent} from "./charts/perfromanceChart/performanceChart.component";
//项目组件
import {ProjectComponent} from "./projects/project.component";
//项目详情组件
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

@NgModule({
  declarations: [
    ChartDirective,
    AppComponent,IndexComponent,NavbarLeftComponent,NavHeaderComponent,FooterComponent,OverviewComponent,OrderDataComponent,SaleDataComponent,EmailComponent,EmailInboxComponent,EmailOutboxComponent,EmailComposeComponent,LoginComponent,RegisterComponent,ProfileComponent,MiniChatComponent,NotFoundComponent,ChatComponent,ScheduleComponent,MemoComponent,ClientComponent,ClientListComponent,ChartsComponent,PerformanceChartComponent,ProjectComponent,ProjectDetailComponent,ContactsComponent,TeamsBoardComponent,BlogComponent,ArticleComponent,FAQComponent,FileManagerComponent,ModifyAvatarComponent,SearchResultComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    ScheduleModule,
    FileUploadModule,
    DialogModule,
    BrowserAnimationsModule,
    UEditorModule.forRoot({
            // 指定ueditor.js路径目录
            path: 'assets/ueditor/',
            // 默认全局配置项
            options: {
                themePath: '/assets/ueditor/themes/'
            }
        })
  ],
  providers: [ToggleService,MyHttpService,CanEnterGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
