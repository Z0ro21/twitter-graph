import { Component, OnInit } from '@angular/core';
import * as Vis from 'vis';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TwitterService } from '../services/twitter.service';
import { ɵEmptyOutletComponent } from '@angular/router';

declare var vis;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  public form: FormGroup;

  constructor(private readonly formBuilder: FormBuilder, private twitter: TwitterService) {
    this.form = this.formBuilder.group({
      userName1: [''],
      userName2: ['']
    });
  }

  async generateGraph() {
    const result = await this.twitter.getCommonFriends(this.form.value);
    let ids = 0;
    var nodes;
    var edges;
    result.forEach(element => {
      ids+=1;
      nodes = {
        id : ids,
        label : element
      }

      edges = {
        from : ids, 
        to : ids
      }
    });

  //   var nodes = [
  //     {id: 1, label: 'Node 1'},
  //     {id: 2, label: 'Node 2'},
  //     {id: 3, label: 'Node 3'},
  //     {id: 4, label: 'Node 4'},
  //     {id: 5, label: 'Node 5'}
  // ];

    // create an array with edges
  //   var edges = [
  //     {from: 1, to: 2},
  //     {from: 1, to: 3},
  //     {from: 2, to: 4},
  //     {from: 2, to: 5}
  // ];

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
      nodes: nodes,
      edges: edges
  };
  var network = new vis.Network(container, data, {});

  }

  ngOnInit() {

    var nodes = [
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
  ];

  // create an array with edges
  var edges = [
      {from: 1, to: 2},
      {from: 1, to: 3},
      {from: 2, to: 4},
      {from: 2, to: 5}
  ];

  // create a network
  var container = document.getElementById('mynetwork');
  var data = {
      nodes: nodes,
      edges: edges
  };
  var network = new vis.Network(container, data, {});
  }

}
