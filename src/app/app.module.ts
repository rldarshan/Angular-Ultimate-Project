import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
// import { Select2Module } from 'ng2-select2';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppstate, rootReducer, INITIAL_STATE } from './store';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

import { SortPipe } from './pipesdemo/arr.sort';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { ObservableService } from './observable.service';
import { ObservableService2 } from './observable2.service';

import { enableProdMode } from '@angular/core';
enableProdMode();

import { AppService } from './app/app.service';

import { UserService } from './user/user.service';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { personCrudComponent } from './components/crud/person-crud.component';
import { AppComponent } from './app.component';
// import { AsyncObservablePipeComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';

import { DataComponent } from './components/data/data.component';
import { TableComponent } from './components/table/table.component';
import { HighlightComponent } from './components/highlight.component';
import { AmchartComponent } from './components/amchart/amchart.component';
import { MaterialComponent } from './components/material/material.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { MatCheckboxModule, MatSlideToggleModule, MatRadioModule, MatTabsModule, MatChipsModule, MatIconModule } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatGridListModule, MatCardModule } from '@angular/material';
import { MatSelectModule, MatSliderModule, MatMenuModule, MatSidenavModule, MatToolbarModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule, MatButtonModule, MatProgressSpinnerModule, MatProgressBarModule, } from '@angular/material';
/* import {MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatDatepickerModule,
  MatFormFieldModule
} from '@angular/material'; */

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DataComponent,
    HighlightComponent,
    PageNotFoundComponent,
    HighlightDirective,
    AmchartComponent,
    MaterialComponent,
    UserComponent,
    UserDetailsComponent,
    UserListComponent,
    UserNewComponent,
    UserEditComponent,
    LoginFormComponent,
    PipesdemoComponent,
    SortPipe,
    personCrudComponent
    // AsyncObservablePipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'table', component: TableComponent },
      { path: 'data', component: DataComponent },
      { path: 'pagenotfound', component: PageNotFoundComponent },
      { path: 'amchart', component: AmchartComponent },
      { path: 'material', component: MaterialComponent },
      { path: 'form-validation', component: LoginFormComponent },
      { path: 'crud', component: personCrudComponent }
    ]),
    HttpModule,
    HttpClientModule,
    AmChartsModule,
    // Select2Module,
    NgReduxModule,
    // Ng2SmartTableModule,

    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatPaginatorModule
  ],
  // exports:[MatButtonModule, MatCheckboxModule],
  providers: [AppService, ObservableService, ObservableService2, UserService],
  bootstrap: [AppComponent]

})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppstate>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}

export class MyOwnCustomMaterialModule { } 