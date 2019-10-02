import React from 'react';
import './css/main.css';
import './css/bootstrap.min.css'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div class="container-fluid">
        <div class="row">
            <div class="col-11 mx-auto pt-3">
                
                <h3 class="text-uppercase mb-4">budget app</h3>
                <div class="row">

                    <div class="col-md-5 my-3">
                        
                        <div class="budget-feedback alert alert-danger text-capitalize">budget feedback</div>
                        
                        <form id="budget-form" class=" budget-form">
                            <h5 class="text-capitalize">please enter your budget</h5>
                            <div class="form-group">
                                <input type="number" class="form-control budget-input" id="budget-input"/>
                            </div>
                            
                            <button type="submit" class="btn text-capitalize budget-submit"
                                id="budget-submit">calculate</button>
                        </form>
                    </div>

                    <div class="col-md-7">
                        
                        <div class="row my-3">
                            <div class="col-4 text-center mb-2">
                                <h6 class="text-uppercase info-title">budget</h6>
                                <span class="budget-icon"><i class="fas fa-money-bill-alt"></i></span>
                                <h4 class="text-uppercase mt-2 budget" id="budget"><span>$ </span><span
                                        id="budget-amount">0</span></h4>
                            </div>
                            <div class="col-4 text-center">
                                <h6 class="text-uppercase info-title">expenses</h6>
                                <span class="expense-icon"><i class="far fa-credit-card"></i></span>
                                <h4 class="text-uppercase mt-2 expense" id="expense"><span>$ </span><span
                                        id="expense-amount">0</span></h4>
                            </div>
                            <div class="col-4 text-center">
                                <h6 class="text-uppercase info-title">balance</h6>
                                <span class="balance-icon"><i class="fas fa-dollar-sign"></i></span>
                                <h4 class="text-uppercase mt-2 balance" id="balance"> <span>$ </span><span
                                        id="balance-amount">0</span></h4>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-5 my-3">
                        
                        <div class="expense-feedback alert alert-danger text-capitalize">expense feedback</div>
                        
                        
                        <form id="expense-form" class=" expense-form">
                            <h5 class="text-capitalize">please enter your expense</h5>
                            <div class="form-group">
                                <input type="text" class="form-control expense-input" id="expense-input"/>
                            </div>
                            <h5 class="text-capitalize">please enter expense amount</h5>
                            <div class="form-group">
                                <input type="number" class="form-control expense-input" id="amount-input"/>
                            </div>
                            
                            
                            <button type="submit" class="btn text-capitalize expense-submit" id="expense-submit">add
                                expense</button>
                        </form>
                    </div>
                    <div class="col-md-7 my-3">
                        
                        
                        <div class="expense-list" id="expense-list">
                            <div class="expense-list__info d-flex justify-content-between text-capitalize">
                                <h5 class="list-item">expense title</h5>
                                <h5 class="list-item">expense value</h5>
                                <h5 class="list-item"></h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
        </header>
      </div>
    )
  }
}

export default App;
