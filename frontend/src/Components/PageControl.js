class PageControl extends React.Component{

    constructor(props) {
        super(props);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleSummarize = this.handleSummarize.bind(this);
        
        this.state = {isSummaryGenerated: false}
    
    
    }

    handleUpload() {
        // await the summary
        this.setState({isSummaryGenerated: true})
      }

    handleSummarize() {
        this.setState({isSummaryGenerated: false})
    }
    










}