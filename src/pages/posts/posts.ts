import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { stringify } from '@angular/core/src/render3/util';
import { isRightSide } from 'ionic-angular/umd/util/util';


@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})

export class PostsPage {

  posts: Post[] = []; // list contains posts
  editableId: number = -1; // id of the current editable post
  CurrentPost: Post = new Post(); // object contain the current post

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
  }

  // Event to post/add a new post
  OnPost() {
    // Set the current post object with the new data except the post text
    // this.CurrentPost.id = this.posts.length;
    this.CurrentPost.img = '../../assets/imgs/woman.png';
    this.CurrentPost.post_by = 'Doaa Mohamed';
    let date = new Date();
    this.CurrentPost.post_date = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();

    // POST: adds a random id to the object sent
    // Note: the resource will not be really created on the server but it will be faked as if.
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'message',
        body: this.CurrentPost.text,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.CurrentPost.id = Number(json["id"]);
        // add the new post to the list of posts
        this.posts.push(this.CurrentPost);
        console.log(this.CurrentPost.id)
        // sort the list of posts descending
        this.posts = this.posts.sort((one, two) => (two.id > one.id ? 1 : -1));
        // Reset the page
        this.CurrentPost = new Post();
      })



  }
  // Event to mark the edited post by it's id
  OnEdit(id) {
    console.log(id);
    // set the editableId with the post choosen for editting
    this.editableId = id;
  }
  // Event to post data of the edited post 
  DoneEdit(id) {
    // Reset the editableId
    this.editableId = -1;
    console.log(this.posts.find(i => i.id == id).text);
    // PUT: post the data with the id of the post that the user edited it 
    // Note: the resource will not be really updated on the server but it will be faked as if.
    fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: 'message',
        body: this.posts.find(i => i.id == id).text,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }
  // Event to delete the post : shows alert to confirm the delete action
  OnDelete(id) {
    // Config the alert displayed to confirm the delete action
    let alert = this.alertCtrl.create({
      title: 'Warning',
      message: 'Are you sure you want to delete this post!!',
      buttons: [
        {
          text: 'Cancel',
          handler: (data: any) => {
          }
        },
        {
          text: 'OK',
          handler: (data: any) => {
            // DELETE: delete the post 
            // Note: the resource will not be really deleted on the server but it will be faked as if.
            fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
              method: 'DELETE'
            })
            // Remove the post form list
            this.posts.splice(this.posts.findIndex(i => i.id == id), 1);
          }
        }
      ]
    });
    // Display the alert
    alert.present();
  }

}
// this class for post type contain essential data
class Post {
  id: number = 0;
  text: string = "";
  img: string = '';
  post_by: string = '';
  post_date: string = "";
}
