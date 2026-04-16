function getTotalEmployees(data) {
    allEmployees = new Set
    data.departments.forEach(dept=>{
        dept.teams.forEach(team=>{
            team.members.forEach(member=>{
                allEmployees.add(member)
            })
        })
    })
    return allEmployees.size
}

const data= require('./dataset.json')
console.log(getTotalEmployees(data))
