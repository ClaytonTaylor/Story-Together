angular.module('callTimeApp', [])
    .controller('searchController', searchController);
    
    function searchController($scope) {
        var self = this;
            
        
        
        self.test = function() {
            self.Name = $scope.Name;
            self.Position = $scope.Position;
            self.Gender = $scope.Gender;
            self.Location = $scope.Location;
            self.Experience = $scope.Experience;
            self.Equipment = $scope.Equipment;
            
            var newUser = {
                Name: self.Name,
                Gender: self.Gender,
                Location: self.Location,
                Experience: self.Experience,
                Equipment: self.Equipment,
                Position: self.Position,
                Phone: 405-313-0004
            }
            
          
            function randomUser(list) {
                return list[Math.floor(Math.random() * list.length)];
            }
    
            function callCrew(user,crew){
            	var newArray = []
            	var newCrew = {}
            	var POS = user.Position
            	for(var i in crew) {
            		newArray = []
            			for(var c = 0; c < crew[i].length; c++){
            				if(user.Experience === crew[i][c].Experience){
            					newArray.push(crew[i][c])
            				}
            				newCrew[i] = randomUser(newArray)
            			}
            	}
            	newCrew[user.Position] = user
            	delete newCrew[POS].Position
            	return newCrew
            }
            
            self.NewCrew = callCrew(newUser, crewList)
            console.log(self.NewCrew)
          
          
          
        };
        
        
    }