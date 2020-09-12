import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ToastrModule } from "ngx-toastr";
import { AgmCoreModule } from "@agm/core";
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StoreModule } from "@ngrx/store";

import { 
  PerfectScrollbarModule, 
  PERFECT_SCROLLBAR_CONFIG, 
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { AppComponent } from "./app.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { DragulaService } from "ng2-dragula";
import { AuthGuard } from "./shared/authentification/guard/auth-guard.service";
import {environment} from "../environments/environment";
import {AngularFirestore, AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {AngularFireFunctionsModule} from "@angular/fire/functions";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfirmDialogComponent} from "./shared/dialog/confirm.dialog.component";
import {PositionDialogComponent} from "./shared/dialog/position-dialog/position-dialog.component";
import {AngularFireMessaging} from "@angular/fire/messaging/messaging";
import {XhrInterceptor} from "./shared/authentification/interceptor/xhr-interceptor";
import {NotificationService} from "./components/extra/notification/notification.service";

import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import {FlexLayoutModule, StylesheetMap, StyleUtils, LayoutStyleBuilder, MediaMarshaller} from "@angular/flex-layout";
import {AuthorizationGuard} from "./shared/authentification/guard/authorization.guard";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
    ConfirmDialogComponent,
    PositionDialogComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),

    // MAPS
    AgmCoreModule.forRoot(environment.googleMaps),
    MatGoogleMapsAutocompleteModule,

    PerfectScrollbarModule,

    FormsModule,
    ReactiveFormsModule,

  // Firebase configuration
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireFunctionsModule, // cloudfunction

  ],
  providers: [
    NotificationService,
    AuthGuard,
    DragulaService,
    FlexLayoutModule,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    // { provide: PERFECT_SCROLLBAR_CONFIG,
    //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    // },

    AngularFirestore,
    // AngularFireMessaging,

    AuthorizationGuard,
    XhrInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true
    },
  ],
  entryComponents : [
    ConfirmDialogComponent,
    PositionDialogComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
