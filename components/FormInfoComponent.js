import React, { Component } from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import { Card, CardHeader, CardContent, Modal } from 'react-native-elements';
import Main from './MainComponent';
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
        const formId = this.props.navigation.getParam('formId');
        const formselected = this.state.formselector.filter(formselected => formselected.id === formId)[0];
        return <RenderForm formselected={formselected} />;
    }
}


function RenderForm({formselected}) {
   
    if (formselected) {
        return (
            <Main>
                <Card>
                    
                    <View>
                        componentDidMount(){
                            Linking.openURL(URL).catch((err) => console.error('An error occurred', err))
                        }
                    </View>
                    
                </Card>
                <Button>Hit Me!</Button>
            </Main>
        );
    }
}


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
  });

export default FormInfo;