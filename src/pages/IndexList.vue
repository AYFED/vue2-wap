<template>
    <div class="page-indexlist">
        <h1 class="page-title">Index List</h1>
        <p class="page-indexlist-desc">此例请使用手机查看</p>
        <div class="page-indexlist-wrapper">
            <index-list>
                <group v-for="(item, index) in alphabet" :key="index" :title="item.initial">
                    <cell v-for="(cell, cellIndex) in item.cells" :key="cellIndex" :title="cell"></cell>
                </group>
            </index-list>
        </div>
    </div>
</template>

<script>
  import { IndexList, Cell, Group } from '@/components';

  const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];
  export default {
    components:{
      IndexList,
      Cell,
      Group
    },
    data() {
      return {
        alphabet: []
      };
    },
    created() {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
        let cells = NAMES.filter(name => name[0] === initial);
        this.alphabet.push({
          initial,
          cells
        });
      });
      this.alphabet = this.alphabet.filter(item => item.cells.length > 0)
    }
  };
</script>

<style lang="less" scoped>
    .page-title{
        text-align: center;
        color: #666;
        padding-bottom: 5px;
    }

    .page-indexlist-desc{
        text-align: center;
        color: #666;
        padding-bottom: 5px;
    }

    .page-indexlist-wrapper{
        width: 100%;
        border-top: solid 1px #ddd;
    }

</style>
