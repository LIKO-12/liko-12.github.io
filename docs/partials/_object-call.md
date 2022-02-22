import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

Object methods should be called using the `:` operator.
Which passes the object itself as a parameter before all the other specified parameters.
That is necessary for object methods to work efficiently.

For example to call the method `shutdown` on the object `myComputer` the both ways would work:

<Tabs>

<TabItem value="colon" label="Colon" default> 

```lua
myComputer:shutdown()
```

</TabItem>

<TabItem value="period" label="Period"> 

It's possible to call using `.` but it's less syntax sweet.

```lua
myComputer.shutdown(myComputer)
```

</TabItem>

</Tabs>

:::
