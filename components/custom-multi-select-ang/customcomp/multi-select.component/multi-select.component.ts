import { Component, Input, Output, ViewChild, EventEmitter,  AfterViewInit, OnInit, OnChanges } from '@angular/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'custom-multi-select',
    templateUrl: './multi-select.component.html',
    styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnChanges, OnInit
//    ,  AfterViewInit
{

    @Input() title: string;
    @Input() dataSourceName: string;
    @Input() textField: string;
    @Input() valueField: string;
    @Input() dataSourceData: Observable<any>;

    public multiSelectData: string[] = [];

    constructor() {
    }

    ngOnInit() {
        // debugger;
        if ( this.title === undefined ) {
            this.title = '';
        }

        if ( this.dataSourceName === undefined ) {
            this.dataSourceName = '';
        }

        console.log("multi-select.component.ts.ngOnInit");
        console.log("Title: "+this.title);
        console.log("dataSourceName: "+this.dataSourceName);

        // debugger;
        this.dataSourceData.subscribe(
            (data) => {
                //debugger;
                // console.log(`received data: ${data.length} items`);
                this.multiSelectData = data;
            },
            (error) => { alert (`Error: ${error}`); },
            () => {
                console.log(`completed subscription`);
            }
        );
    }

    // public ngOnChanges(): void {
    //     this.multiSelectData = this.data;
    // }

    // ngAfterViewInit(): void {
    // }

    multiSelectFilterChange(filter) {
        console.log('filterChange', filter);
        const normalizedFilter = filter.toLowerCase();
        this.multiSelectData = countries.filter((s) => s.toLowerCase().indexOf(normalizedFilter) !== -1);
    }

    multiSelectValueChange(e) {
        console.log('valueChange', e);
    }
}

/*
These are test data to develop/debug without a REST service.
 */
const roomMetricsData =  [ { "id": 1, "room": "Schrödinger", "currentTemp": 21, "setTemp": 20, "hum": 61, "co2": 201, "voc": 1 }, { "id": 2, "room": "Galileo", "currentTemp": 22, "setTemp": 21, "hum": 62, "co2": 202, "voc": 2 }, { "id": 3, "room": "Curie", "currentTemp": 23, "setTemp": 20, "hum": 63, "co2": 203, "voc": 3 }, { "id": 4, "room": "Tesla", "currentTemp": 24, "setTemp": 20, "hum": 64, "co2": 204, "voc": 4 }, { "id": 5, "room": "Pasteur", "currentTemp": 25, "setTemp": 20, "hum": 65, "co2": 205, "voc": 5 }, { "id": 6, "room": "Kepler", "currentTemp": 26, "setTemp": 20, "hum": 66, "co2": 206, "voc": 6 }, { "id": 7, "room": "Bohr", "currentTemp": 27, "setTemp": 20, "hum": 67, "co2": 207, "voc": 7 }, { "id": 8, "room": "Planck", "hum": 68, "setTemp": -1, "co2": 208, "currentTemp": -2, "voc": 8 }, { "id": 9, "room": "Mandelbrot", "setTemp": 29, "currentTemp": 25, "hum": 69, "co2": 209, "voc": 9 }, { "id": 1001, "room": "Lavoisier", "setTemp": 21, "currentTemp": 1, "hum": 1, "co2": 1, "voc": 1 }, { "id": 1002, "room": "Nobel", "setTemp": 22, "currentTemp": 2, "hum": 2, "co2": 2, "voc": 2 }, { "id": 1003, "room": "Descartes", "hum": 3, "setTemp": 3, "co2": 3, "currentTemp": 3, "voc": 3 }, { "id": 1004, "room": "Pascal", "hum": 4, "setTemp": 44, "co2": 44, "currentTemp": 44, "voc": 44 }, { "id": 1009, "room": "Poincaré", "hum": 19, "Current_Temperature": 19, "setTemp": 22, "co2": 19, "voc": 19 }, { "id": 1010, "room": "Lovelace", "hum": 10, "setTemp": 10, "co2": 10, "currentTemp": 10, "voc": 10 } ];

const countries = ['Afghanistan', 'Åland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua And Barbuda'
, 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin'
, 'Bermuda', 'Bhutan', 'Bolivia, Plurinational State Of', 'Bonaire, Sint Eustatius And Saba', 'Bosnia And Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil'
, 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands'
, 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Congo'
, 'The Democratic Republic Of The', 'Cook Islands', 'Costa Rica', 'Côte D\'ivoire', 'Croatia', 'Cuba', 'Curaçao', 'Cyprus', 'Czech Republic', 'Denmark'
, 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia'
, 'Falkland Islands (malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon'
, 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-bissau'
, 'Guyana', 'Haiti', 'Heard Island And Mcdonald Islands', 'Holy See (vatican City State)', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia'
, 'Iran, Islamic Republic Of', 'Iraq', 'Ireland', 'Isle Of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati'
, 'Korea, Democratic People\'s Republic Of', 'Korea, Republic Of', 'Kuwait', 'Kyrgyzstan', 'Lao People\'s Democratic Republic', 'Latvia', 'Lebanon', 'Lesotho'
, 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Macedonia, The Former Yugoslav Republic Of', 'Madagascar', 'Malawi', 'Malaysia'
, 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia, Federated States Of', 'Moldova' +
', Republic Of', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia'
, 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine, State Of'
, 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Réunion', 'Romania'
, 'Russian Federation', 'Rwanda', 'Saint Barthélemy', 'Saint Helena, Ascension And Tristan Da Cunha', 'Saint Kitts And Nevis', 'Saint Lucia'
, 'Saint Martin (french Part)', 'Saint Pierre And Miquelon', 'Saint Vincent And The Grenadines', 'Samoa', 'San Marino', 'Sao Tome And Principe', 'Saudi Arabia'
, 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten (dutch Part)', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa'
, 'South Georgia And The South Sandwich Islands', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard And Jan Mayen', 'Swaziland', 'Sweden'
, 'Switzerland', 'Syrian Arab Republic', 'Taiwan, Province Of China', 'Tajikistan', 'Tanzania, United Republic Of', 'Thailand', 'Timor-leste', 'Togo', 'Tokelau'
, 'Tonga', 'Trinidad And Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks And Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates'
, 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela, Bolivarian Republic Of', 'Viet Nam'
, 'Virgin Islands, British', 'Virgin Islands, U.s.', 'Wallis And Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'
];
