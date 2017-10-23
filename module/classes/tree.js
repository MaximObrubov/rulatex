class Tree {
  constructor(rulatex) {
    this.rulatex = rulatex;
    this.composeTree()
  }

  composeTree() {

    console.group("%c Custom log:", "background: #222; color: #bada55; font-size: 16px;");
    console.log(this.rulatex.view);
    console.groupEnd();

    // TODO: тут this.rulatex.view ещё недобавленный на сцену объект, поэтому его
    // будет просто распарсить через children или childNodes
    // childNodes вроде имеет какие-то гадкие хуйни с комментариями и CDATA
    // возможно есть более подходящий способ получить дочек через HTML5 DOM
  }
}

export { Tree };
