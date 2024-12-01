const posts = [
    {
      id: 1,
      title: 'Lactation Consulting',
      href: '#',
      description:
        'Navigating the breastfeeding journey can be challenging. Our lactation consulting service offers personalized support to help you establish a successful breastfeeding experience. Our trained consultants provide evidence-based advice on positioning, latch techniques, and frequency of feeds, ensuring both you and your baby feel comfortable and confident. Whether you are facing difficulties or simply want to optimize your breastfeeding routine, our compassionate approach will empower you. Together, we’ll create a tailored plan that suits your unique needs, fostering a positive breastfeeding relationship that benefits both you and your little one.',
      imageUrl:
        '/images/mum_cuddling_baby.jpg',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Baby led weaning guidance',
        href: '#',
        description:
          `Baby-led weaning (BLW) is a popular approach that allows infants to explore solid foods at their own pace. Our guidance helps you introduce this method safely and effectively. We provide practical tips on food choices, preparation techniques, and meal ideas that cater to your baby's developmental stage. Our experts address common concerns and offer strategies to create a positive mealtime environment. With our support, you’ll foster your child's independence and love for food while ensuring they receive the essential nutrients they need. Start this exciting journey and watch your baby thrive as they discover the joys of self-feeding!`,
        imageUrl:
          '/images/baby_wean.jpg',
      },
      {
        id: 3,
        title: 'Formula feeding support',
        href: '#',
        description:
          `Choosing formula feeding doesn’t mean compromising on your baby’s nutrition. Our formula feeding support service provides you with the knowledge and confidence to make informed choices. We help you select the right formula type and feeding schedule tailored to your baby's needs. Our experts will guide you on preparation, storage, and safe feeding practices to ensure a healthy start for your little one. We also address any concerns you may have about transitioning from breastfeeding to formula. With our dedicated assistance, you’ll navigate this journey smoothly, ensuring your baby receives the nourishment they deserve.`,
        imageUrl:
          '/images/bottle_feed.jpg',
      },
  ]
  
  export default function Services() {
    return (
      <div className="bg-white py-24 sm:py-32 scroll-mt-40" id="services">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Services
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">Working together, we can achieve happy, stress-free mealtimes for you and baby.</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  {/* <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div> */}
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-8 text-sm/6 text-gray-600">{post.description}</p>
                  </div>
                  {/* <div className="relative mt-8 flex items-center gap-x-4">
                    <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-100" />
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  