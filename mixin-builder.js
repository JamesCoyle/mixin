// usage: class MyClass extends base(BaseClass).using(mixin1, mixin2, ..)
// usage: class MyClass extends self.using(mixin1, mixin2, ..)

class MixinBuilder
{
	constructor(superclass)
	{
		this.superclass = superclass;
	}

	using(...mixins)
	{
		return mixins.reduce((c, mixin) => mixin(c), this.superclass);
	}
}

export let base = (superclass) => new MixinBuilder(superclass);
export let self = new MixinBuilder(function () {});
