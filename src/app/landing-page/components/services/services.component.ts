import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

    services = [
      {
        icon: "assets/images/png/services-images/legal-consulting.png",
        title: "إستشارات قانونية لكافة القطاعات",
        description: "تهدف إلى مساعدة العملاء على فهم حقوقهم والتزاماتهم القانونية، وتوجيههم في حل النزاعات أو تجنبها. يمكن أن تشمل صياغة العقود، مراجعة الوثائق، أو تمثيل العملاء أمام الجهات الرسمية."
      },
      {
        icon: "assets/images/png/services-images/contracts.png",
        title: "صناعة ومراجعة العقود",
        description: "تهدف إلى مساعدة الأفراد والشركات في إعداد وفحص العقود القانونية بشكل دقيق ومهني. تتضمن الصياغة كتابة بنود العقد بما يتوافق مع القوانين ويحمي حقوق الأطراف"
      },
      {
        icon: "assets/images/png/services-images/court-representation.png",
        title: "تمثيل العملاء أمام مختلف المحاكم",
        description: "شمل هذه الخدمة تقديم الاستشارات القانونية، وإعداد المستندات القانونية، وتمثيل العميل في الجلسات، والدفاع عن حقوقه ومصالحه وفقًا للقانون."
      },
      {
        icon: "assets/images/png/services-images/tech-consulting.png",
        title: "الاستشارات في مجال الحكومة و الامتثال",
        description: "تُقدم الدعم للجهات الحكومية والشركات لضمان التزامها بالقوانين واللوائح المحلية والدولية. تشمل هذه الخدمات تقديم المشورة حول التشريعات"
      },
      {
        icon: "assets/images/png/services-images/company-establishment.png",
        title: "تأسيس الشركات التجارية والمدنية",
        description: "تساعد الأفراد والمستثمرين على إنشاء شركات جديدة في دولة ما، سواء كانت محلية أو أجنبية. تشمل هذه الخدمة الإجراءات القانونية والإدارية مثل تسجيل الشركة، الحصول على التراخيص اللازمة"
      },
      {
        icon: "assets/images/png/services-images/trademark.png",
        title: "تسجيل العلامات التجارية وبراءات و خدمات الملكية الفكرية",
        description: "تهدف إلى حماية الابتكارات والإبداعات والعلامات المميزة للأفراد والشركات. تسجيل العلامات التجارية يحمي الشعارات والأسماء التجارية"
      },
      {
        icon: "assets/images/png/services-images/company-liquidation.png",
        title: "تصفية الشركات",
        description: "عملية يتم من خلالها تقييم وفرز الشركات بناءً على معايير محددة مثل الأداء المالي، الحجم، القطاع، أو الجودة. تُستخدم هذه الخدمة عادةً لمساعدة المستثمرين أو العملاء في اختيار الشركات المناسبة للتعامل معها أو الاستثمار فيها"
      },
      {
        icon: "assets/images/png/services-images/licenses.png",
        title: "إستخراج جميع التراخيص",
        description: "تهدف إلى تسهيل عملية الحصول على التراخيص اللازمة لممارسة أنشطة مختلفة، سواء كانت تجارية أو صناعية أو مهنية أو غيرها. تشمل هذه الخدمة تقديم الاستشارات" 
      }
    ];


}
