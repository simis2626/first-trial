/**
 * Created by Andromeda on 19/08/2016.
 */
import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Employer} from "../objClass/employer";
import {EmployerProvider} from "../services/employer.service";


@Component(
    {
        selector: 'employer-list',
        templateUrl: 'app/employer-list/employer-list.component.html'
    })
export class EmployerList implements OnInit {
    constructor(private employerProvider: EmployerProvider) {
    }

    public masterEmployers: Employer[];
    showAddForm: boolean = false;
    public selectedEmployer: Employer;
    employers: Employer[];
    empClasses;
    public searchType: string;
    private ready: boolean = false;
    public employerSelected: boolean = false;
    checkEmployer;

    @Output() employerSelectedEmit = new EventEmitter();
    getEmployers() {

        this.employerProvider.getEmployers()
            .subscribe(employers => {
                this.employers = employers.sort(function (a, b) {
                    var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
                    if (nameA < nameB) //sort string ascending
                        return -1;
                    if (nameA > nameB)
                        return 1;
                    return 0; //default return value (no sorting)
                });
                this.masterEmployers = this.employers;
            })
    }





    ngOnInit() {
        this.empClasses = [];
        this.getEmployers();
        this.setSearchType('suburb');

        this.checkEmployer = setInterval(()=> {
            if (this.employers) {


            for (let i = 0; i < this.employers.length; i++) {
                let val = '{"id":"' + this.employers[i]._id + '","moveClass":"true"}';

                this.empClasses.push(JSON.parse(val));
            }
                this.ready = true;
                clearInterval(this.checkEmployer);
            }
        }, 500);
    }

    onEmployerDelete(employerId: string) {
        this.employers = this.employers.filter((emps)=> {
            return emps._id != employerId;
        });
    }

    getMoveClass(empId: string) {
        for (let i = 0; i < this.empClasses.length; i++) {
            //noinspection TypeScriptUnresolvedVariable
            if (this.empClasses[i].id == empId) {
                return this.empClasses[i].moveClass;

            }


        }

    }

    employerAdded(event) {

        this.employers.unshift(event.employer);
        setTimeout(()=> {
            let val = '{"id":"' + event.employer._id + '","moveClass":"true"}';

            this.empClasses.push(JSON.parse(val));
            document.getElementById("employ" + event.employer._id).scrollIntoView(true);
        }, 100);


    }

    showAddForms() {
        this.showAddForm = true;
        setTimeout(()=> {
            document.getElementById("empForm").scrollIntoView(true);
        }, 50);

    }

    hideAddForms() {

        setTimeout(()=> {
            this.showAddForm = true;
        }, 1000);

    }


    changeClass(empId: string) {
        for (let i = 0; i < this.empClasses.length; i++) {
            if (this.empClasses[i].id == empId)
                this.empClasses[i].moveClass = false;
                this.employerSelectedEmit.emit();
            }


        }

    setSearchType(type: string) {
        this.searchType = type;

    }


    searchEmployers(event) {
        var searchString = event.target.value.toLowerCase();
        if (true) {
            var filteredEmployers: Employer[] = this.masterEmployers.filter((ele, ind, arr)=> {
                switch (this.searchType) {
                    case 'suburb':
                        if (ele.address.suburb.toLowerCase().indexOf(searchString) >= 0) {
                            return true;
                        } else {
                            return false;
                        }


                    case 'name':
                        if (ele.name.toLowerCase().indexOf(searchString) >= 0) {
                            return true;
                        } else {
                            return false;
                        }


                }


            });

            this.employers = filteredEmployers;

        }

    }




}
