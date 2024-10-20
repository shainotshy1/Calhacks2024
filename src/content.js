import { Groq } from "groq-sdk"

export async function perform_action(action) {
    console.log('called action', action.name);

    if (action.action === "redirect") {
        // Redirect to the specified URL
        console.log('trying to redirect to website', action.link)
        window.location.href = action.link;
        return;  // Exit after redirection
    }
    
    const element = document.getElementById(action.id);
    
    if (element) {
        console.log(action.action, action.value);
        if (action.action === "set_value") {
            element.value = action.value
            const form = element.closest('form');
            if (form) {
                form.submit();  // Submit the form
            } else {
                console.log('No form found for this element');
            }
        } else if (action.action === "submit") {
        }
    } else {
        console.log('element not found for id', action.id);
    }
}

export async function script_action(action) {

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        var activeTabId = activeTab.id;
        
        chrome.scripting.executeScript({
            target: { tabId: activeTabId },
            func : perform_action,
            args : [action]
        });
      });
}

// Function to find input elements and textareas
function findInputElements() {
    const elements = [];

    // Find input elements
    const inputElements = document.querySelectorAll('input');
    inputElements.forEach(el => {
        if (el.id) {
            elements.push({ id: el.id, tag: 'input', name: el.name || '' });
        }
    });

    // Find textarea elements
    const textareaElements = documesnt.querySelectorAll('textarea');
    textareaElements.forEach(el => {
        if (el.id) {
            elements.push({ id: el.id, tag: 'textarea', name: el.name || '' });
        }
    });

    return elements;
}

// Function to set the value of an input or textarea
function setValue(elementId, value) {
    const element = document.getElementById(elementId);
    if (element) {
        element.value = value;
        console.log(`Value set for element ${elementId}: ${value}`);
    } else {
        console.log(`Element with ID ${elementId} not found`);
    }
}

// Function to submit a form
function submitForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.submit();
        console.log(`Form with ID ${formId} submitted.`);
    } else {
        console.log(`Form with ID ${formId} not found.`);
    }
}

// This function will execute a predefined set of actions
function executeActions(actions) {
    actions.forEach(action => {
        if (action.type === "input") {
            setValue(action.id, action.value);
        } else if (action.type === "submit") {
            submitForm(action.id);
        }
    });
}

// Function to be called when the "Debug" button is clicked
function triggerDebugActions() {
    // Log available elements on the page (optional)
    const elements = findInputElements();
    console.log("Elements found: ", JSON.stringify(elements, null, 2));  // Improved logging for better visibility

    // Example actions to perform (these could be dynamic or predefined)
    const actions = [
        { type: "input", id: "input-field", value: "Debug Test" },  // Set value in input field
        { type: "submit", id: "input-field-form" }  // Submit the form
    ];

    // Execute actions
    executeActions(actions);
}

// document.addEventListener('DOMContentLoaded', function() {
//     const debugBtn = document.getElementById('debug-button');

//     console.log('doin stuff')

//     debugBtn.addEventListener("click", () => {
//         console.log('debug was clicked')
//         // Call the function defined in content.js to execute actions
//         triggerDebugActions();
//     });
// });
