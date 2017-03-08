var React = require('react')
var ReactDOM = require('react-dom')
var ReactTabs = require('react-tabs')
var HttpClient = require('whatwg-fetch')

class DashboardComponent extends React.Component {


  loadMe() {
     fetch("/src/model/config-data.json")
          .then(response => response.json())
            .then(json => {
              console.log(json);
              this.setState({
                data: json
              });
            });
   }

   handleSelect(index, last) {
     console.log('Selected tab: ' + index + ', Last tab: ' + last);
     if(0 == index) {
       console.log('Loading Data!!');
       this.loadMe();
       //this.state.selectedIndex=0;
     }
   }

   constructor(props) {
      super(props);

      this.state = {
        data: []
      };
      this.handleSelect = this.handleSelect.bind(this);
      this.loadMe = this.loadMe.bind(this);

    }
    componentDidMount() {
      console.log('mount!!');
       this.loadMe();
             /*fetch("/src/model/mock-data.json")
                  .then(response => response.json())
                    .then(json => {
                      console.log(json);
                      this.setState({
                        data: json
                      });
                    });*/
    }

    componentWillUnmount() {
     console.log('unmount!!');

    }
    render() {
     console.log('render!!');
     return (
       <ReactTabs.Tabs
         onSelect={this.handleSelect}
         selectedIndex={0}>
         <ReactTabs.TabList>
           <ReactTabs.Tab>Interface Management</ReactTabs.Tab>
           <ReactTabs.Tab>Gateway Management</ReactTabs.Tab>
           <ReactTabs.Tab>Trade Flow Management</ReactTabs.Tab>
           <ReactTabs.Tab>QOS Rule Management</ReactTabs.Tab>
           <ReactTabs.Tab>Operations</ReactTabs.Tab>
         </ReactTabs.TabList>

         <ReactTabs.TabPanel>

         <div className="table-responsive">
         <table className="table table-striped table-hover table-bordered">
         <thead>
         <tr>
           <th>Source Identifier</th>
           <th>Target Identifier</th>
           <th>Dozer Mapper</th>
           <th>Bean IO</th>
           <th>File Path</th>
           <th>EndPoint URI</th>
           <th>Actions</th>

         </tr>
         </thead>
         <tbody>
         {this.state.data.map((row, index) =>
           <tr key={index}>
             <td>{row.source_identifier}</td>
             <td>{row.target_identifier}</td>
             <td>{row.dozer_maper}</td>
             <td>{row.bean_io}</td>
             <td>{row.file_path}</td>
             <td>{row.endoint_uri}</td>
             <td>
                <a href="#" className="btn btn-info ">
                  <span className="glyphicon glyphicon-pencil"></span> Edit
                </a>
            </td>
           </tr>
         )}
         </tbody>
         </table>
         </div>
         </ReactTabs.TabPanel>
         <ReactTabs.TabPanel>
           <h2>Under Construction!</h2>
         </ReactTabs.TabPanel>
         <ReactTabs.TabPanel>
         <h2>Under Construction!</h2>
         </ReactTabs.TabPanel>
         <ReactTabs.TabPanel>
         <h2>Under Construction!</h2>
         </ReactTabs.TabPanel>
         <ReactTabs.TabPanel>
         <h2>Under Construction!</h2>
         </ReactTabs.TabPanel>
       </ReactTabs.Tabs>
     );
    }
  }

  module.exports = DashboardComponent;
