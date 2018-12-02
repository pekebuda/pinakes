import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'groupByPropertyValue'
})
/**
 * @description
 * this will return an array of objects, each object containing a group of
 * objects
 *
 * @example
 * var myArray = [
 *  {
        name: "Apple",
        color: "Green"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Grape",
        color: "Green"
    },
    {
        name: "Melon",
        color: "Yellow"
    },
    {
        name: "Orange",
        color: "Orange"
    }
];
 *
 * produces:
 *
 * [
    {
        grouper: "Green",
        values: [
            {
                name: "Apple",
                color: "Green"
            },
            {
                name: "Grape",
                color: "Green"
            }
        ]
    },
    {
        grouper: "Yellow",
        values: [
            {
                name: "Banana",
                color: "Yellow"
            },
            {
                name: "Melon",
                color: "Yellow"
            }
        ]
    },
    {
        grouper: "Orange",
        values: [
            {
                name: "Orange",
                color: "Orange"
            }
    }
 *];
 *
 * @param {} collection
 * @param {} grouper
 */
export class GroupByPropertyValuePipe implements PipeTransform {
  transform (collection: Array, grouper: string) : Array {
    if(!collection) return null; // prevents the application from breaking

    const groupedCollection = collection.reduce((accumulator, current) => {
      if (!current[grouper]) {
        //TODO se podria crear un valor especial para grouper, vgr $undefined
      } else if(!accumulator[current[grouper]]) {
        accumulator[current[grouper]] = [current];
      } else {
        accumulator[current[grouper]].push(current);
      }
      return accumulator;
    }, {});

    return Object.keys(groupedCollection).map(key => ({ grouper: key, values: groupedCollection[key] }));
  }
}
