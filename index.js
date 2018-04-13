/**
 * Created by zhouwenjie on 2018/4/12.
 */

import React from 'react';

import {
    TouchableWithoutFeedback,
} from 'react-native';
// import debounce from 'lodash.debounce';


class MultiTapComponent extends TouchableWithoutFeedback {

    debouncedOnPress = (e,tapCount) => {
        this.props.onPress && this.props.onPress(e,tapCount);
    }

    onPress = debounce(this.debouncedOnPress, 300);

    render(){
        return (<TouchableWithoutFeedback {...this.props}
            onPress={(e)=>this.onPress(e)}>
            {this.props.children}
        </TouchableWithoutFeedback>);
    }

}

function debounce(func, wait, immediate) {
    let timeout;
    let fireCount=0;

    function debounced(event) {
        fireCount+=1;
        var context = this;
        event.persist();
        var later = function() {
            timeout = null;
            if (!immediate) {
                let args = Array.from(arguments);
                // fireCount = 0;
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait, event, fireCount);
        if (callNow) {
            // fireCount = 0;
            func.apply(context, event, fireCount);
        }
    }

    return debounced;

}

export default MultiTapComponent;
