/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {

    // Application Constructor
    

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
 
        // VK.Widgets.Comments('vk_comments', {limit: 10, width: '627', attach: '*'});
        
  
//               function getit(response) {
//     if (response.session) {
//         var id = response.session.mid;
//     }
//     VK.Api.call('users.get', {uids: id, fields: 'sex,photo_big'}, function(r) {
//         if(r.response) {
//             alert(r.response[0].sex);
//             console.log(r.response);
//         }
//     });
// }
// VK.UI.button('login_button');
// function login(){
//           VK.init({
//             apiId: 5916792
//           });
//           VK.Auth.login(authorize);
          
//           function authorize(response) {
//             if (response.session) {
//               navigator.notification.alert("Authorization denied");
//             }
//             else {
//               navigator.notification.alert("Authorization doen't denied");
//             }
//           }
          
//           VK.Api.call('friends.get', {fields: 'uid,first_name'}, function(data) {
//             navigator.notification.alert(data.response.length);
//             if (data.error) {
//               navigator.notification.alert(data.error.error_msg);
//             } else {
//               if (data.response.length > 0) {
//                 for (i = 0; i < data.response.length; i++) {
//                   navigator.notification.alert(data.response[i]);
//                   document.write("<p>" + data.response[i] + "</p>");
//                 }
//               }
//             }
//           });
//           VK.UI.button('login_button'); 

        // document.getElementById("show").addEventListener("click", show);
   
        function show() {
           navigator.notification.alert("Name ");
        }

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);

    }
};

app.initialize();