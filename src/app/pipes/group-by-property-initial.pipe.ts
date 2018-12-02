import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'groupByPropertyInitial'
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
 *];
 *
 * produces:
 *
 * [
    {
        grouper: "G",
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
        grouper: "Y",
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
        grouper: "O",
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
export class GroupByPropertyInitialPipe implements PipeTransform {
  transform (collection: any[], grouper: string) : Array {
    if(!collection) return null; // prevents the application from breaking

    const groupedCollection = collection.reduce((accumulator, current) => {
      if (!current[grouper]) {
        //TODO se podria crear un valor especial para grouper, vgr $undefined
      } else if (!accumulator[current[grouper].charAt(0)]) {
        accumulator[current[grouper].charAt(0)] = [current];
      } else {
        accumulator[current[grouper].charAt(0)].push(current);
      }
      return accumulator;
    }, {});

    return Object.keys(groupedCollection).map(key => ({ grouper: key, values: groupedCollection[key] }));
  }
}
