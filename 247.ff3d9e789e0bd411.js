"use strict";(self.webpackChunkmba_challenge_trip_calculator=self.webpackChunkmba_challenge_trip_calculator||[]).push([[247],{2247:(O,y,a)=>{a.r(y),a.d(y,{TravelModule:()=>$});var c=a(6895),g=a(6773),r=a(433),h=a(805),t=a(8256),l=a(529),b=a(2340);let f=(()=>{class n{}return n.prefixes={local:"http://localhost:3000",mocklab:"https://mbachallengecountries.mocklab.io"},n})();const m=b.N.production?f.prefixes.mocklab:f.prefixes.local;let w=(()=>{class n extends class Z{constructor(o,e){this.http=o,this.endpoint=e}list(o){let e=new l.LE;return o&&Object.keys(o).forEach(i=>e=e.append(i,o[i])),this.http.get(`${m}/${this.endpoint}`,{params:e})}getByid(o){const e=new l.WM;return this.http.get(`${m}/${this.endpoint}/${o}`,{headers:e})}create(o){const e=new l.WM;return this.http.post(`${m}/${this.endpoint}`,o,{headers:e})}update(o,e){const i=new l.WM;return this.http.put(`${m}/${this.endpoint}/${e}`,o,{headers:i})}remove(o){const e=new l.WM;return this.http.delete(`${m}/${this.endpoint}/${o}`,{headers:e})}}{constructor(e){super(e,"countries")}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(l.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=a(4247),T=a(5593),_=a(3752),S=a(9827),A=a(613),U=a(8177),M=a(2453);function I(n,o){1&n&&(t.TgZ(0,"div",5),t._UZ(1,"img",6),t.qZA())}function k(n,o){if(1&n&&(t.TgZ(0,"p-card",1),t.YNc(1,I,2,0,"ng-template",2),t.TgZ(2,"div",3)(3,"div",4)(4,"label"),t._uU(5),t.qZA()(),t.TgZ(6,"div",4)(7,"label"),t._uU(8),t.qZA()(),t.TgZ(9,"div",4)(10,"label"),t._uU(11),t.ALo(12,"number"),t.qZA()(),t.TgZ(13,"div",4)(14,"label"),t._uU(15),t.qZA()(),t.TgZ(16,"div",4)(17,"label"),t._uU(18),t.qZA()(),t.TgZ(19,"div",4)(20,"label"),t._uU(21),t.ALo(22,"currency"),t.qZA()(),t.TgZ(23,"div",4)(24,"label"),t._uU(25),t.ALo(26,"currency"),t.qZA()(),t.TgZ(27,"div",4)(28,"label"),t._uU(29),t.qZA()(),t.TgZ(30,"div",4)(31,"label"),t._uU(32),t.ALo(33,"currency"),t.qZA()(),t.TgZ(34,"div",4)(35,"label"),t._uU(36),t.ALo(37,"currency"),t.qZA()()()()),2&n){const e=t.oxw();t.xp6(5),t.hij("Origin: ",e.getOrigin()," "),t.xp6(3),t.hij("Destination: ",e.getDestination()," "),t.xp6(3),t.hij("Distance: ",t.Dn7(12,11,e.getDistance(),"1.0-2","pt")," Km "),t.xp6(4),t.AsE("",e.form.value.adults," adult(s), ",e.form.value.children," children(s) "),t.xp6(3),t.hij("Fligth type: ",e.getClassDescription()," "),t.xp6(3),t.hij("",t.gM2(22,15,e.getAdultsCosts()/e.form.value.adults,"USD","$","1.0-2")," per adult "),t.xp6(4),t.hij("",t.gM2(26,20,e.getChildrenCosts()/e.form.value.children,"USD","$","1.0-2")," per children "),t.xp6(4),t.hij("Miles: ",e.form.value.miles," "),t.xp6(3),t.hij("Discounted value per miles: ",t.gM2(33,25,e.getDiscountedValuePerMiles(),"USD","$","1.0-2")," "),t.xp6(4),t.hij("Total: ",t.gM2(37,30,e.getTotalValue(),"USD","$","1.0-2")," ")}}let N=(()=>{class n{constructor(){this.showingSummary=!1}getOrigin(){const{originCountry:e,originCity:i}=this.form.getRawValue();return`${e?.country} (${i?.city})`}getDestination(){const{destinationCountry:e,destinationCity:i}=this.form.getRawValue();return`${e?.country} (${i?.city})`}getDistance(){return this.distance(this.originLatitude()||0,this.originLongitude()||0,this.destinationLatitude()||0,this.destinationLongitude()||0)}distance(e,i,s,u){const d=this.degreesToRadians(s-e),p=this.degreesToRadians(u-i),B=this.degreesToRadians(e),V=this.degreesToRadians(s);return 12742.142*Math.asin(Math.sqrt(Math.sin(d/2)*Math.sin(d/2)+Math.cos(B)*Math.cos(V)*Math.sin(p/2)*Math.sin(p/2)))}degreesToRadians(e){return e*Math.PI/180}originLatitude(){const{originCity:e}=this.form.getRawValue();return e?.latitude}originLongitude(){const{originCity:e}=this.form.getRawValue();return e?.longitude}destinationLatitude(){const{destinationCity:e}=this.form.getRawValue();return e?.latitude}destinationLongitude(){const{destinationCity:e}=this.form.getRawValue();return e?.longitude}getClassDescription(){const{class:e}=this.form.getRawValue();return"ECONOMIC"===e?"Economic class":"Executive class"}getAdultsCosts(){let e=0;if(this.form.valid){const i=this.isSameCountry()?.3:.5,s=this.isEconomic()?1:1.8;e=this.getDistance()*i*s*this.form.value.adults}return e}getChildrenCosts(){let e=0;if(this.form.valid){const i=this.isSameCountry()?.15:.25,s=this.isEconomic()?1:1.4;e=this.getDistance()*i*s*this.form.value.children}return e}isSameCountry(){const{originCountry:e,destinationCountry:i}=this.form.getRawValue();return e===i}isEconomic(){const{class:e}=this.form.getRawValue();return"ECONOMIC"===e}getDiscountedValuePerMiles(){const{miles:e}=this.form.getRawValue();let s=0;return e>0&&(s=.02*e),s}getTotalValue(){return this.getAdultsCosts()+this.getChildrenCosts()-this.getDiscountedValuePerMiles()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["jsh-summary"]],inputs:{form:"form",showingSummary:"showingSummary"},decls:1,vars:1,consts:[["header","Trip summary","subheader","Confirm your choices","styleClass","p-card-shadow",4,"ngIf"],["header","Trip summary","subheader","Confirm your choices","styleClass","p-card-shadow"],["pTemplate","header"],[1,"grid"],[1,"col-12"],[1,"flex","justify-content-center"],["alt","Card","src","assets/travel/summary.png",1,"w-12rem"]],template:function(e,i){1&e&&t.YNc(0,k,38,35,"p-card",0),2&e&&t.Q6J("ngIf",i.showingSummary)},dependencies:[c.O5,v.Z,h.jx,c.JJ,c.H9],encapsulation:2}),n})();const x=["summary"];function R(n,o){1&n&&(t.TgZ(0,"div",24),t._UZ(1,"img",25),t.qZA())}function D(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"p-button",28),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.checkout())}),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("disabled",!e.form.valid)}}function q(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"p-button",29),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.reset())}),t.qZA()}}function L(n,o){if(1&n&&(t.YNc(0,D,1,1,"p-button",26),t.YNc(1,q,1,0,"p-button",27)),2&n){const e=t.oxw();t.Q6J("ngIf",!e.showingSummary),t.xp6(1),t.Q6J("ngIf",e.showingSummary)}}const J=[{path:"",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["jsh-travel"]],decls:1,vars:0,template:function(e,i){1&e&&t._UZ(0,"router-outlet")},dependencies:[g.lC],encapsulation:2}),n})(),children:[{path:"",redirectTo:"checkout",pathMatch:"full"},{path:"checkout",component:(()=>{class n{constructor(e,i){this.service=e,this.messageService=i,this.showingSummary=!1}ngOnInit(){this.form=this.createForm(),this.getCountries()}createForm(){return new r.cw({originCountry:new r.NI({value:null,disabled:this.showingSummary},r.kI.required),originCity:new r.NI({value:null,disabled:this.showingSummary},r.kI.required),destinationCountry:new r.NI({value:null,disabled:this.showingSummary},r.kI.required),destinationCity:new r.NI({value:null,disabled:this.showingSummary},r.kI.required),adults:new r.NI({value:0,disabled:this.showingSummary},r.kI.required),children:new r.NI({value:0,disabled:this.showingSummary},r.kI.required),class:new r.NI({value:"ECONOMIC",disabled:this.showingSummary},r.kI.required),miles:new r.NI({value:0,disabled:this.showingSummary})})}getCountries(){this.service.list().subscribe(e=>{this.countries=e})}getCities(e){return e?this.countries?.find(s=>s.country===e?.country)?.cities:[]}checkout(){this.canCheckout()?(this.messageService.clear(),this.showingSummary=!0):this.messageService.add({severity:"warn",summary:"Warning",detail:"You have broked at least one of the validation rules",life:15e3,closable:!0})}canCheckout(){const{adults:e,originCity:i,destinationCity:s}=this.form.getRawValue(),u=this.summary.getAdultsCosts()+this.summary.getChildrenCosts();return e>0&&i!==s&&u>this.summary.getDiscountedValuePerMiles()}reset(){this.showingSummary=!1,this.form=this.createForm()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(w),t.Y36(h.ez))},n.\u0275cmp=t.Xpm({type:n,selectors:[["jsh-checkout"]],viewQuery:function(e,i){if(1&e&&t.Gf(x,7),2&e){let s;t.iGM(s=t.CRH())&&(i.summary=s.first)}},features:[t._Bn([h.ez])],decls:54,vars:28,consts:[[1,"grid","p-fluid"],[1,"col-6"],["header","Travel data","subheader","Define your travel options","styleClass","p-card-shadow"],["pTemplate","header"],[3,"formGroup"],[1,"grid"],[1,"field","col-6"],["for","horizontal"],["formControlName","originCountry","placeholder","Select a country","optionLabel","country",3,"options","showClear","disabled"],["formControlName","originCity","placeholder","Select a city","optionLabel","city",3,"options","showClear","disabled"],["formControlName","destinationCountry","placeholder","Select a country","optionLabel","country",3,"options","showClear","disabled"],["formControlName","destinationCity","placeholder","Select a city","optionLabel","city",3,"options","showClear","disabled"],["formControlName","adults","buttonLayout","horizontal","inputId","horizontal","spinnerMode","horizontal","decrementButtonClass","p-button-primary","incrementButtonClass","p-button-primary","incrementButtonIcon","pi pi-plus","decrementButtonIcon","pi pi-minus",3,"showButtons","step","disabled"],["formControlName","children","buttonLayout","horizontal","inputId","horizontal","spinnerMode","horizontal","decrementButtonClass","p-button-primary","incrementButtonClass","p-button-primary","incrementButtonIcon","pi pi-plus","decrementButtonIcon","pi pi-minus",3,"showButtons","step","disabled"],[1,"field","col-12"],[1,"field-radiobutton"],["name","class","value","ECONOMIC","formControlName","class","inputId","class1",3,"disabled"],["for","class1"],["name","class","value","EXECUTIVE","formControlName","class","inputId","class2",3,"disabled"],["for","class2"],["formControlName","miles",3,"min","max","step","disabled"],["pTemplate","footer"],[3,"form","showingSummary"],["summary",""],[1,"flex","justify-content-center"],["alt","Card","src","assets/travel/travel-header-plane.png",1,"w-16rem"],["label","Checkout","icon","pi pi-check","styleClass","mb-1",3,"disabled","click",4,"ngIf"],["label","Restart","icon","pi pi-times","styleClass","p-button-secondary",3,"click",4,"ngIf"],["label","Checkout","icon","pi pi-check","styleClass","mb-1",3,"disabled","click"],["label","Restart","icon","pi pi-times","styleClass","p-button-secondary",3,"click"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"p-card",2),t.YNc(3,R,2,0,"ng-template",3),t.TgZ(4,"article",4)(5,"div",5)(6,"div",6)(7,"label",7),t._uU(8,"Origin country"),t.qZA(),t._UZ(9,"p-dropdown",8),t.qZA(),t.TgZ(10,"div",6)(11,"label",7),t._uU(12,"Origin city"),t.qZA(),t._UZ(13,"p-dropdown",9),t.qZA()(),t.TgZ(14,"div",5)(15,"div",6)(16,"label",7),t._uU(17,"Destination country"),t.qZA(),t._UZ(18,"p-dropdown",10),t.qZA(),t.TgZ(19,"div",6)(20,"label",7),t._uU(21,"Destination city"),t.qZA(),t._UZ(22,"p-dropdown",11),t.qZA()(),t.TgZ(23,"div",5)(24,"div",6)(25,"label",7),t._uU(26,"Adults"),t.qZA(),t._UZ(27,"p-inputNumber",12),t.qZA(),t.TgZ(28,"div",6)(29,"label",7),t._uU(30,"Children"),t.qZA(),t._UZ(31,"p-inputNumber",13),t.qZA()(),t.TgZ(32,"div",5)(33,"div",14)(34,"label",7),t._uU(35,"Class"),t.qZA(),t.TgZ(36,"div",15),t._UZ(37,"p-radioButton",16),t.TgZ(38,"label",17),t._uU(39,"Economic"),t.qZA()(),t.TgZ(40,"div",15),t._UZ(41,"p-radioButton",18),t.TgZ(42,"label",19),t._uU(43,"Executive"),t.qZA()()()(),t.TgZ(44,"div",5)(45,"div",14)(46,"label",7),t._uU(47),t.qZA(),t._UZ(48,"p-slider",20),t.qZA()()(),t.YNc(49,L,2,2,"ng-template",21),t.qZA()(),t.TgZ(50,"div",1),t._UZ(51,"jsh-summary",22,23),t.qZA()(),t._UZ(53,"p-toast")),2&e){let s,u,C,d,p;t.xp6(4),t.Q6J("formGroup",i.form),t.xp6(5),t.Q6J("options",i.countries)("showClear",!0)("disabled",i.showingSummary),t.xp6(4),t.Q6J("options",i.getCities(null==(s=i.form.get("originCountry"))?null:s.value))("showClear",!0)("disabled",!(null!=(u=i.form.get("originCountry"))&&u.value)||i.showingSummary),t.xp6(5),t.Q6J("options",i.countries)("showClear",!0)("disabled",i.showingSummary),t.xp6(4),t.Q6J("options",i.getCities(null==(C=i.form.get("destinationCountry"))?null:C.value))("showClear",!0)("disabled",!(null!=(d=i.form.get("destinationCountry"))&&d.value)||i.showingSummary),t.xp6(5),t.Q6J("showButtons",!0)("step",1)("disabled",i.showingSummary),t.xp6(4),t.Q6J("showButtons",!0)("step",1)("disabled",i.showingSummary),t.xp6(6),t.Q6J("disabled",i.showingSummary),t.xp6(4),t.Q6J("disabled",i.showingSummary),t.xp6(6),t.hij(" Use ",null==(p=i.form.get("miles"))?null:p.value," miles "),t.xp6(1),t.Q6J("min",0)("max",1e5)("step",100)("disabled",i.showingSummary),t.xp6(3),t.Q6J("form",i.form)("showingSummary",i.showingSummary)}},dependencies:[c.O5,r.JJ,r.JL,r.sg,r.u,v.Z,h.jx,T.zx,_.Lt,S.Rn,A.EU,U.iR,M.FN,N],encapsulation:2}),n})()}]}];let E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(J),g.Bz]}),n})();var j=a(1685);let $=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,E,j._]}),n})()}}]);