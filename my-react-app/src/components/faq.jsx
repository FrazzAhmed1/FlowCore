import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/faq.css'; 

const Faq = () => { 
    return ( 
        <> 
                   
      <main className="faq-container"> 
        <h2>Frequently Asked Questions</h2>
       
        <details className="faq">
          <summary>What is FlowCore?</summary> 
          <p>FlowCore is a productivity app that helps you manage your time and tasks using the Pomodoro technique, goal tracking, and task organization.</p> 
        </details> 
         
        <details className="faq"> 
          <summary>How does the Pomodoro Timer work?</summary> 
          <p>It allows you to work in focused 25-minute sessions, followed by short breaks. This helps improve concentration and reduce burnout.</p> 
        </details> 
      
        <details className="faq"> 
          <summary>Can I add and delete tasks?</summary>
          <p>Yes, on the Tasks page you can add new tasks, mark them as complete, delete them, or update them as needed.</p> 
        </details>
      
        <details className="faq">
          <summary>Where are my tasks and goals stored?</summary>
          <p>In this version, all data is stored in your browser using local storage. It does not require an internet connection or account.</p>
        </details> 
      
        <details className="faq"> 
          <summary>How can I track long-term goals?</summary> 
          <p>You can visit the Goals page to list and manage your long-term or weekly goals, separate from your daily tasks.</p>
        </details>
      
        <details className="faq">
          <summary>Is my data saved if I refresh the page?</summary>
          <p>Yes. As long as you’re using the same browser and haven't cleared your site data, your tasks and goals will remain saved.</p>
        </details>
      
        <details className="faq">
          <summary>Can I use this app offline?</summary>
          <p>Yes, this version of FocusMate works entirely offline using your browser’s built-in storage.</p>
        </details>
      
        <details className="faq">
          <summary>What features are coming in future updates?</summary>
          <p>We plan to add user accounts, syncing across devices, analytics with charts, reminders, and more customization options.</p>
        </details>
      </main> 
                </>
    );
};

export default Faq;  