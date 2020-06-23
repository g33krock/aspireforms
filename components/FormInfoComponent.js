import React, { Component } from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import { Button, Card, CardHeader, CardContent, Modal } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import { FORMSELECT } from '../shared/formselector';

const URL = "https://forms.office.com/Pages/ResponsePage.aspx?id=mwBchQPJ8kK-RdZZg7qZcziQfVhuurVAsw-Rz1l377dUMk9OQlNLU1ozS1hYNjRaMDNLRVFRRVNBSCQlQCN0PWcu"


class FormInfo extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            formselector: FORMSELECT
        };
    }

    static navigationOptions = {
        title: 'Form Information'
    };

    render() {
        const formId = this.props.route.params.formId
        const formselected = this.state.formselector.filter(formselected => formselected.id === formId)[0];
        return <RenderForm formselected={formselected} />;
    }
}


function RenderForm({formselected}) {
   
    if (formselected) {
        return (
            <WebView
                originWhitelist={['*']}
                source={{ uri: URL }}
            />
        );
    }
}


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
  });

export default FormInfo;