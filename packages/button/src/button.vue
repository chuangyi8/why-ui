<template>
  <button type="button"
          @click="$emit('click')"
          class="w-button"
          :disabled="disabled"
          :class="[
    type,
    sizeClass,
     {
     'btn-circle': isCircle,
      'w-plain': plain,
      'w-round': round,
      'w-disabled':disabled,
     }
     ]">
    <!--<i v-if="icon !== ''" :class="[icon]"></i>-->
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: "WButton",
    props: {
      isCircle: {
        default: false,
        type: Boolean
      },
      type: {
        type: String,
        default: 'w-default',

      },
      plain: {
        default: false,
        type: Boolean
      },
      round: {
        default: false,
        type: Boolean
      },
      disabled:{
        default: false,
        type: Boolean
      },
      size: {
        type: String
      },
      icon: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        sizeClass: {
          'w-size-lg': this.size === 'lg',
          'w-size-sm': this.size === 'sm',
          'w-size-xs': this.size === 'xs',
        }
      };
    },
    created() {
      // alert(JSON.stringify(this.size))
    }
  };
</script>
