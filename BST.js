

function BTNode(value){
	this.value = value;
	this.left = null;
	this.right = null;
}

function BST(){
	this.root = null;
}

//BST: Add
BST.prototype.Add = function(value){
	var newNode = new BTNode(value);

	if(this.root == null)
		return this.root = newNode;

	var currentNode = this.root;
	var parentNode = currentNode;

	while(currentNode){
		if(value <= currentNode.value){
			currentNode = currentNode.left;
			if(currentNode == null){
				parentNode.left = newNode;
			}
		}else{
			currentNode = currentNode.right;
			if(currentNode == null){
				parentNode.right = newNode;
			}
		}
	}
	return this
}

//BST: Contains
BST.prototype.Contains = function(value){
	var currentNode = this.root;

	while(currentNode){
		if(value == currentNode.value)	return true;
		if(value < currentNode.value){
			currentNode = currentNode.left;
		}
		if(value > currentNode.value){
			currentNode = currentNode.right;
		}
	}
	return false;
}

//BST: Min
BST.prototype.Min = function(){
	var currentNode = this.root;

	if(!currentNode)	return null

	while(currentNode){
		if(currentNode.left == null)
			return currentNode.value;
		currentNode = currentNode.left;
	}
}

//BST: Max
BST.prototype.Max = function(){
	var currentNode = this.root;

	if(!currentNode)	return null

	while(currentNode){
		if(currentNode.right == null)
			return currentNode.value;
		currentNode = currentNode.right;
	}
}

//BST: Size
BST.prototype.Size = function(currentNode = this.root){
	if(currentNode == null)	return 0
	return 1 + this.Size(currentNode.left) + this.Size(currentNode.right)
}

//BST: Height
BST.prototype.Height = function(currentNode = this.root){
	if(currentNode == null)	return 0
	return 1 + Math.max(this.Height(currentNode.left), this.Height(currentNode.right))
}

//BST: Is Empty
BST.prototype.IsEmpty = function(value){
	if(this.root == null)	return true;
	else	return false;
}

//BST: Is Balanced
BST.prototype.IsBalanced = function(){
	if(this.root == null){
		return true;
	}else{
		currentNode = this.root;
		diff = this.Height(currentNode.left) - this.Height(currentNode.right);
		if(Math.abs(diff) <= 1)	return true;
	}
	return false;
}

var x = new BST();
console.log(x.IsEmpty())
x.Add(3);
x.Add(5);
x.Add(1);
x.Add(7);
console.log(x.Contains(1))
console.log(x.Min())
console.log(x.Max())
console.log(x.Size())
console.log(x.Height())
console.log(x.IsBalanced())
