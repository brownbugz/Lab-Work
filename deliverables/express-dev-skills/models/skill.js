
//skills objects all instances
const skills = [
    {
      name: 'JS',
      description: 'The greatest programming language of all time. No questions.',
      level: 5
    },
    {
      name: 'HTML',
      description: 'HTML handles structure 🏢.',
      level: 3
    },
    {
      name: 'CSS',
      description: 'CSS handles style 🎨.',
      level: 9
    }
  ];

  module.exports = {
      getAll,
      getOne,
      addSkill,
      editSkill,
      deleteSkill,
  };

  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills[id - 1];
  }

  function addSkill(skill) {
    skills.push(skill);
  }

  function editSkill(id, skill) {
    skill[id] = skill;
  }

  function deleteSkill(id) {
    skill.splice(id, 1);
  }

