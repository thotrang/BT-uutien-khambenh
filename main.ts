import {Patient} from "./Patient";
import {Queue} from "./Queue";

let patient1=new Patient('Smith','5');
let patient2=new Patient('Jones','4');
let patient3=new Patient('Fehrenbach','6');
let patient4=new Patient('Ingram','1');
let patient5=new Patient('Brown','1');

let listPatient=new Queue<Patient>();

listPatient.enqueue(patient1);
listPatient.enqueue(patient2);
listPatient.enqueue(patient3);
listPatient.enqueue(patient4);
listPatient.enqueue(patient5);

listPatient.container.sort((a, b) => (a.code > b.code) ? 1 : -1);
console.log(listPatient.container);

listPatient.container[0].Exam();
listPatient.container[1].Exam();

let listexam=new Queue<Patient>();
let listnNotExam=new Queue<Patient>();

for(let i=0;i<listPatient.container.length;i++){
    if(listPatient.container[i].exam){
        listexam.enqueue(listPatient.container[i]);
    }else{
        listnNotExam.enqueue(listPatient.container[i]);
    }
}
console.log(listexam.container);
console.log(listnNotExam.container);





