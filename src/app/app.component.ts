import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';

// export interface Food {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService, HttpModule]

})

export class AppComponent implements OnInit {
  tables: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  headings: any;
  // foods: Food[] = [
  //   { value: 'steak-0', viewValue: 'Steak' },
  //   { value: 'pizza-1', viewValue: 'Pizza' },
  //   { value: 'tacos-2', viewValue: 'Tacos' }
  // ];

  constructor(private appService: AppService) { }

  ngOnInit() {



    this.dropdownList = [
      { "id": 1, "itemName": "Table List", "category": "All Tables" },

      { "id": 101, "itemName": "APXS", "category": "Tables" },
      { "id": 102, "itemName": "CAMERA", "category": "Tables" },
      { "id": 103, "itemName": "COORDS", "category": "Tables" },
      { "id": 104, "itemName": "CURIOSITY", "category": "Tables" },
      { "id": 105, "itemName": "EARTH", "category": "Tables" },
      { "id": 106, "itemName": "ELECTRIC_HEATERS", "category": "Tables" },
      { "id": 107, "itemName": "FPGAS", "category": "Tables" },
      { "id": 108, "itemName": "HAZCAMS", "category": "Tables" },
      { "id": 109, "itemName": "HRS", "category": "Tables" },
      { "id": 1010, "itemName": "IMAGES", "category": "Tables" },
      { "id": 1011, "itemName": "MARSORBITER", "category": "Tables" },
      { "id": 1012, "itemName": "MB", "category": "Tables" },
      { "id": 1013, "itemName": "MINITES", "category": "Tables" },
      { "id": 1014, "itemName": "NAVCAMS", "category": "Tables" },
      { "id": 1015, "itemName": "OPPORTUNITY", "category": "Tables" },
      { "id": 1016, "itemName": "PAVCAMS", "category": "Tables" },
      { "id": 1017, "itemName": "RADIOISOTOPE", "category": "Tables" },
      { "id": 1018, "itemName": "RBE", "category": "Tables" },
      { "id": 1019, "itemName": "RCE", "category": "Tables" },
      { "id": 1020, "itemName": "RTOS", "category": "Tables" },
      { "id": 1021, "itemName": "SENSORS", "category": "Tables" },
      { "id": 1022, "itemName": "SPACEDATASYSTEM", "category": "Tables" },
      { "id": 1023, "itemName": "SPECTROMETER", "category": "Tables" },
      { "id": 1024, "itemName": "THERMALSYSTEM", "category": "Tables" },
      { "id": 1025, "itemName": "TRANSMITTER", "category": "Tables" },
      { "id": 1026, "itemName": "UHF_RADIOS", "category": "Tables" },



      { "id": 2, "itemName": "totalCuriosities", "category": "Functions" },
      { "id": 3, "itemName": "get_FPGA_list", "category": "Functions" },
      { "id": 4, "itemName": "GetEffiency", "category": "Functions" },
      { "id": 5, "itemName": "totalRCES", "category": "Functions" },
      { "id": 6, "itemName": "getMaxTemperature", "category": "Functions" },

      { "id": 7, "itemName": "DeleteFPGAS", "category": "Procedures" },
      { "id": 8, "itemName": "UPDATEearth", "category": "Procedures" },
      { "id": 9, "itemName": "AvgPressure", "category": "Procedures" },
      { "id": 10, "itemName": "GetMaxTemp", "category": "Procedures" },
      { "id": 11, "itemName": "addcuriosity", "category": "Procedures" },

      { "id": 12, "itemName": "MarsOrbiterbeforeinsert", "category": "Triggers" },
      { "id": 13, "itemName": "Curiositybeforeupdate", "category": "Triggers" },
      { "id": 14, "itemName": "APXSbeforedelete", "category": "Triggers" }

    ];
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: true,
      text: "Select Query",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Table or Query',
      enableSearchFilter: true,
      classes: "myclass custom-class",
      groupBy: "category"

    };
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);

    switch (item.id) {
      case 101:
        this.appService.getTable("APXS").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);

          }
        });
        break;
      case 102:
        this.appService.getTable("CAMERA").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 103:
        this.appService.getTable("COORDS").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 104:
        this.appService.getTable("CURIOSITY").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 105:
        this.appService.getTable("EARTH").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 106:
        this.appService.getTable("ELECTRIC_HEATERS").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 107:
        this.appService.getTable("FPGAS").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = []; for (var i = 0; i < data.data.metaData.length; i++) {
              head.push(data.data.metaData[i].name)
            }
            console.log(head);
          }
        });
        break;
      case 108:
        this.appService.getTable("HAZCAMS").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 109:
        this.appService.getTable("HRS").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1010:
        this.appService.getTable("IMAGES").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1011:
        this.appService.getTable("MARSORBITER").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1012:
        this.appService.getTable("MB").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1013:
        this.appService.getTable("MINITES").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1014:
        this.appService.getTable("NAVCAMS").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
            for (var i = 0; i < data.data.metaData.length; i++) {

             head.push(data.data.metaData[i].name)
           }
           this.headings = head;

           console.log(head);
          }
        });
        break;
      case 1015:
        this.appService.getTable("OPPORTUNITY").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1016:
        this.appService.getTable("PAVCAMS").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
            for (var i = 0; i < data.data.metaData.length; i++) {

             head.push(data.data.metaData[i].name)
           }
           this.headings = head;

           console.log(head);
          }
        });
        break;
      case 1017:
        this.appService.getTable("RADIOISOTOPE").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1018:
        this.appService.getTable("RBE").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
            for (var i = 0; i < data.data.metaData.length; i++) {

             head.push(data.data.metaData[i].name)
           }
           this.headings = head;

           console.log(head);
          }
        });
        break;
      case 1019:
        this.appService.getTable("RCE").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1020:
        this.appService.getTable("RTOS").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1021:
        this.appService.getTable("SENSORS").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1022:
        this.appService.getTable("SPACEDATASYSTEM").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1023:
        this.appService.getTable("SPECTROMETER").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1024:
        this.appService.getTable("THERMALSYSTEM").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1025:
        this.appService.getTable("TRANSMITTER").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1026:
        this.appService.getTable("UHF_RADIOS").subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data.metaData);
            console.log(data.data.rows);
            // this.headings = data.data.metaData
            this.tables = data.data.rows;
            // this.populateForm(this.user);
            var head = [];
             for (var i = 0; i < data.data.metaData.length; i++) {

              head.push(data.data.metaData[i].name)
            }
            this.headings = head;

            console.log(head);
          }
        });
        break;
      case 1:
        this.appService.getTables().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data);
            this.tables = data.data;
            // this.populateForm(this.user);
          }
        });
        break;
      case 2:
        this.appService.totalCuriosities().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data);
            this.tables = data.data;
            // this.populateForm(this.user);
          }
        });
        break;
      case 3:
        this.appService.FPGAtypeo().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data);
            this.tables = data.data;
            // this.populateForm(this.user);
          }
        });
        break;
      case 4:
        this.appService.GetEffiency().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data);
            this.tables = data.data;
            // this.populateForm(this.user);
          }
        });
        break;
      case 5: this.appService.totalRCES().subscribe(data => {
        if (data.success === false) {
          if (data.errcode) {
            // this.authService.logout();
            // this.router.navigate(['login']);
          }
          console.log(data.message);
        } else {
          console.log(data.data);
          this.tables = data.data;
          // this.populateForm(this.user);
        }
      });
        break;
      case 6:
        this.appService.getMaxTemperature().subscribe(data => {
          if (data.success === false) {
            if (data.errcode) {
              // this.authService.logout();
              // this.router.navigate(['login']);
            }
            console.log(data.message);
          } else {
            console.log(data.data);
            this.tables = data.data;
            // this.populateForm(this.user);
          }
        });
        break;
      case 7: this.appService.DeleteFPGAS().subscribe(data => {
        if (data.success === false) {
          if (data.errcode) {
            // this.authService.logout();
            // this.router.navigate(['login']);
          }
          console.log(data.message);
        } else {
          console.log(data.data);
          this.tables = data.data;
          // this.populateForm(this.user);
        }
      });
        break;
      case 8: this.appService.UPDATEearth().subscribe(data => {
        if (data.success === false) {
          if (data.errcode) {
            // this.authService.logout();
            // this.router.navigate(['login']);
          }
          console.log(data.message);
        } else {
          console.log(data.data);
          this.tables = data.data;
          // this.populateForm(this.user);
        }
      });
        break;
      case 9: this.appService.AvgPressure().subscribe(data => {
        if (data.success === false) {
          if (data.errcode) {
            // this.authService.logout();
            // this.router.navigate(['login']);
          }
          console.log(data.message);
        } else {
          console.log(data.data);
          this.tables = data.data;
          // this.populateForm(this.user);
        }
      });
        break;
      case 10: this.appService.GetMaxTemp().subscribe(data => {
        if (data.success === false) {
          if (data.errcode) {
            // this.authService.logout();
            // this.router.navigate(['login']);
          }
          console.log(data.message);
        } else {
          console.log(data.data);
          this.tables = data.data;
          // this.populateForm(this.user);
        }
      });
        break;
      case 11: this.appService.addcuriosity().subscribe(data => {
        if (data.success === false) {
          if (data.errcode) {
            // this.authService.logout();
            // this.router.navigate(['login']);
          }
          console.log(data.message);
        } else {
          console.log(data.data);
          this.tables = data.data;
          // this.populateForm(this.user);
        }
      });
        break;
      case 12: this.appService.MarsOrbiterbeforeinsert().subscribe(data => {
        if (data.success === false) {
          if (data.errcode) {
            // this.authService.logout();
            // this.router.navigate(['login']);
          }
          console.log(data.message);
        } else {
          console.log(data.data);
          this.tables = data.data;
          // this.populateForm(this.user);
        }
      });
        break;
      case 13: this.appService.Curiositybeforeupdate().subscribe(data => {
        if (data.success === false) {
          if (data.errcode) {
            // this.authService.logout();
            // this.router.navigate(['login']);
          }
          console.log(data.message);
        } else {
          console.log(data.data);
          this.tables = data.data;
          // this.populateForm(this.user);
        }
      });
        break;
      case 14: this.appService.APXSbeforedelete().subscribe(data => {
        if (data.success === false) {
          if (data.errcode) {
            // this.authService.logout();
            // this.router.navigate(['login']);
          }
          console.log(data.message);
        } else {
          console.log(data.data);
          this.tables = data.data;
          // this.populateForm(this.user);
        }
      });
        break;

      default:
        alert('Default case');
    }
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }


}
// function getTabl() {
//   this.appService.getTables().subscribe(data => {
//     if (data.success === false) {
//       if (data.errcode) {
//         // this.authService.logout();
//         // this.router.navigate(['login']);
//       }
//       console.log(data.message);
//     } else {
//       console.log(data.data);
//       this.tables = data.data;
//       // this.populateForm(this.user);
//     }
//   });
// }