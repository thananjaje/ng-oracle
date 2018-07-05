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
  // foods: Food[] = [
  //   { value: 'steak-0', viewValue: 'Steak' },
  //   { value: 'pizza-1', viewValue: 'Pizza' },
  //   { value: 'tacos-2', viewValue: 'Tacos' }
  // ];

  constructor(private appService: AppService) { }

  ngOnInit() {



    this.dropdownList = [
      { "id": 1, "itemName": "Table List" },
      { "id": 2, "itemName": "totalCuriosities" },
      { "id": 3, "itemName": "get_FPGA_list" },
      { "id": 4, "itemName": "GetEffiency" },
      { "id": 5, "itemName": "totalRCES" },
      { "id": 6, "itemName": "getMaxTemperature" },
      { "id": 7, "itemName": "DeleteFPGAS" },
      { "id": 8, "itemName": "UPDATEearth" },
      { "id": 9, "itemName": "AvgPressure" },
      { "id": 10, "itemName": "GetMaxTemp" },
      { "id": 11, "itemName": "addcuriosity" },
      { "id": 12, "itemName": "MarsOrbiterbeforeinsert" },
      { "id": 13, "itemName": "Curiositybeforeupdate" },
      { "id": 14, "itemName": "APXSbeforedelete" }
      // { "id": 15, "itemName": "Sweden" },
      // { "id": 16, "itemName": "Sweden" },
    ];
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: true,
      text: "Select Query",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);

    switch (item.id) {
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