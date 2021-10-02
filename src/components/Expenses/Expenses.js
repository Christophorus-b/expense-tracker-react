import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
function Expenses(props) {
    return (
      <Card className="">
        <ExpenseItem 
        title={props.expensesDetails[0].title} 
        amount={props.expensesDetails[0].amount} 
        date={props.expensesDetails[0].date}/>     
        <ExpenseItem 
        title={props.expensesDetails[1].title} 
        amount={props.expensesDetails[1].amount} 
        date={props.expensesDetails[1].date}/> 
        <ExpenseItem 
        title={props.expensesDetails[2].title} 
        amount={props.expensesDetails[2].amount} 
        date={props.expensesDetails[2].date}/>     
        <ExpenseItem 
        title={props.expensesDetails[3].title} 
        amount={props.expensesDetails[3].amount} 
        date={props.expensesDetails[3].date}/>
      </Card>
    );
};

export default Expenses;