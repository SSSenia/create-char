import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { CommentNotificationComponent } from "./components/comment-notification/comment-notification.component";
import { TutorialNotificationComponent } from "./components/tutorial-notification/tutorial-notification.component";
import { ParseTagsDirective } from './directives/parse-tags.directive';

@NgModule({
    declarations: [
        TutorialNotificationComponent,
        CommentNotificationComponent,
        ParseTagsDirective
    ],
    exports: [
        TutorialNotificationComponent,
        CommentNotificationComponent
    ],
    imports: [
        CommonModule,
        TranslateModule
    ]
})
export class SharedModule { }