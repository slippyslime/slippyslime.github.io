var Clock = React.createClass({

    getInitialState: function() {
        return {
            m: moment()
        };
    },

    getDefaultProps: function() {
        return {
            format: 'DD.MM.YYYY HH:mm:ss'
        };
    },

    componentDidMount: function() {
        var self = this;
        this.interval = setInterval(function() {
            self.state.m = moment();
            self.setState({m: self.state.m});
        }, 1000);
    },

    render: function() {
        return (
            <h3>
                { this.state.m.format(this.props.format) }
            </h3>
        );
    }
});





ReactDOM.render(
    <div>
        <Clock format='DD.MM.YYYY'/>
        <Clock format='HH:mm:ss'/>
    </div>,
    document.getElementById('app')
)
