# 트리플 static section 구현 과제(김은휼)
  
# 1. 프로젝트 셋업 및 실행 방법
```
yarn install
yarn start
```
<br>

# 2.스택을 구성하는 기술들과 선택한 이유
**사용한 기술들**
- 코어 : React, typescript
- 스타일 : scss, node-sass, classnames
- 상태관리 : React Hooks

**선택한 이유**
- styled-components와 redux를 우선적으로 고려했으나, 아래와 같은 이유로 사용하지 않았습니다.
- 카운터 애니메이션의 경우 렌더링 회수가 많기 때문에 css-in-js보다 css-in-css가 성능상 효율적일 것으로 보았습니다.
- mixin이나 keyframe 등을 다루는 데에는 scss의 생산성이 더 높다고 보았습니다.
- 과제(static section)만 보았을 때는 상태 변화나 재사용의 가능성이 없어서 redux보다 hook으로 관리하는 편이 적절하다고 보았습니다.

<br>

# 3.고민했던 지점들
1) Counter 애니메이션 구현 방법을 결정하는 데 고민한 지점들이 많았습니다.
* CSS 카운터를 사용하는 것이 가장 효율적이라고 보았으나, React와 DOM API만을 이용하라는 가이드에 맞지 않는 것 같아서 제외하였습니다.
* 다음으로는 ref를 통해 text에 직접 접근하는 방법과 state를 갱신하는 방법 중에서 고민하였고, 선언적인 리액트의 특성과 더 어울리는 방법인 후자를 선택했습니다.
* 처음에는 setInterval로 구현하였으나, 종료 시점을 판단하기 위해 dependencyArray에 변수들이 늘어나고 코드가 복잡해지는 이슈가 있어서 setTimeout으로 구현했습니다. 
* setTimeout의 경우 오버헤드로 인해 동일한 시간을 인자로 줄 경우 700ms로 떨어지지 않아서, 계산을 통해 갱신하는 방법을 취했습니다.
